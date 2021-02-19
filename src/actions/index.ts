import getUserTimeline from "../utils/fetch";
import { fetchAuthorMeta } from "../utils/fetchAuthorMeta";

import { ACTION_TYPES, DispatchType } from "./types";
import { QuackDataType } from "../types";

const toggleOptionsDrawer = () => ({
  type: ACTION_TYPES.TOGGLE_OPTIONS_DRAWER,
});

const toggleAppNav = () => ({
  type: ACTION_TYPES.TOGGLE_APP_NAV,
});

const requestQuacks = () => ({
  type: ACTION_TYPES.REQUEST_QUACKS,
});

const requestQuacksSuccess = () => ({
  type: ACTION_TYPES.REQUEST_QUACKS_SUCCESS,
});

const requestQuacksFailure = (error: string) => ({
  type: ACTION_TYPES.REQUEST_QUACKS_FAILURE,
  error,
});

const displayQuacks = (quacks: QuackDataType) => ({
  type: ACTION_TYPES.DISPLAY_QUACKS,
  data: quacks,
});

const fetchQuacks = () => {
  return (dispatch: DispatchType) => {
    setTimeout(async () => {
      dispatch(requestQuacks());
      const quacksData = await getUserTimeline();
      const authorMeta = await fetchAuthorMeta();

      authorMeta.map((authorData, idx) => {
        quacksData.data[idx] = {
          ...quacksData.data[idx],
          authorMeta: authorData,
        };
      });

      if (quacksData) {
        dispatch(requestQuacksSuccess());
        dispatch(displayQuacks(quacksData));
      } else {
        dispatch(requestQuacksFailure("Fetch failed."));
      }
    }, 500);
  };
};

export { toggleOptionsDrawer, toggleAppNav, fetchQuacks };

import getUserTimeline from "../utils/fetch";
import {
  ACTION_TYPES,
  StatelessActionType,
  StatefulActionType,
  DispatchType,
} from "./types";

import { QuackDataType } from "../types";

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
      if (quacksData) {
        dispatch(requestQuacksSuccess());
        dispatch(displayQuacks(quacksData));
      } else {
        dispatch(requestQuacksFailure("Fetch failed."));
      }
    }, 500);
  };
};

export default fetchQuacks;

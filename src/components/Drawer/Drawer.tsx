import React from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";

import StoreState from "../../reducers/types";
import { toggleOptionsDrawer } from "../../actions";
import { ActionType } from "../../actions/types";

const Drawer = () => {
  const dispatch: Dispatch<ActionType> = useDispatch();

  const selectIsOptionsDrawerVisible = (state: StoreState) =>
    state.isOptionsDrawerVisible;
  // const selectDrawerOriginContext = (state: StoreState) => state.drawerOriginContext;
  const isOptionsDrawerVisible = useSelector(selectIsOptionsDrawerVisible);
  //   const drawerOriginContext = useSelector(selectDrawerOriginContext);
  const drawerOriginContext = "QUACKCARD";

  // add origin click for contextual options rendering
  const renderDrawerContent = (origin: string) => {
    switch (origin) {
      case "QUACKCARD":
        return renderQuackCardOptions();
      default:
        return;
    }
  };

  const handleClickCloseDrawer = () => dispatch(toggleOptionsDrawer());

  const renderQuackCardOptions = () => (
    <ul className="drawer__options">
      <li>Not interested in this Quack</li>
      <li>Follow @username</li>
      <li>Add/remove from Lists</li>
      <li>Mute @username</li>
      <li>Block @username</li>
      <li>Embed Quack</li>
      <li>Report Quack</li>
      <li>
        <button
          title="Cancel"
          onClick={handleClickCloseDrawer}
          className="button--cancel"
        >
          Cancel
        </button>
      </li>
    </ul>
  );
  return isOptionsDrawerVisible ? (
    <div className="drawer">{renderDrawerContent(drawerOriginContext)}</div>
  ) : null;
};

export default Drawer;

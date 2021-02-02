import { QuackDataType } from "../types";

enum ACTION_TYPES {
  REQUEST_QUACKS = "REQUEST_QUACKS",
  REQUEST_QUACKS_SUCCESS = "REQUEST_QUACKS_SUCCESS",
  REQUEST_QUACKS_FAILURE = "REQUEST_QUACKS_FAILURE",
  DISPLAY_QUACKS = "DISPLAY_QUACKS",
  TOGGLE_OPTIONS_DRAWER = "TOGGLE_OPTIONS_DRAWER",
}

interface ActionType {
  type: string;
  error?: string;
  data?: QuackDataType;
}

type DispatchType = (args: ActionType) => ActionType;

export { ACTION_TYPES };

export type { ActionType, DispatchType };

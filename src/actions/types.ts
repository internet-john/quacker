import { QuackDataType } from "../types";

enum ACTION_TYPES {
  REQUEST_QUACKS = "REQUEST_QUACKS",
  REQUEST_QUACKS_SUCCESS = "REQUEST_QUACKS_SUCCESS",
  REQUEST_QUACKS_FAILURE = "REQUEST_QUACKS_FAILURE",
  DISPLAY_QUACKS = "DISPLAY_QUACKS",
}

type StatelessActionType = {
  type: string;
};

type StatefulActionType = {
  type: string;
  data: string | Record<string, unknown> | QuackDataType;
};

type DispatchType = (
  args: StatelessActionType | StatefulActionType
) => StatelessActionType | StatefulActionType;

export { ACTION_TYPES };

export type { StatelessActionType, StatefulActionType, DispatchType };

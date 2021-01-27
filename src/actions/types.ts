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
  data: string | Record<string, unknown> | Array<QuackDataType>;
};

type DispatchType = (
  args: StatelessActionType | StatefulActionType
) => StatelessActionType | StatefulActionType;

type QuackDataType = {
  data: { id: string; text: string }[];
  meta: {
    oldest_id: string;
    newest_id: string;
    result_count: number;
    next_token: string;
  };
};

export { ACTION_TYPES };

export type {
  StatelessActionType,
  StatefulActionType,
  DispatchType,
  QuackDataType,
};

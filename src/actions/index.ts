enum ACTION_TYPES {
  REQUEST_QUACKS = "REQUEST_QUACKS",
  REQUEST_QUACKS_SUCCESS = "REQUEST_QUACKS_SUCCESS",
  REQUEST_QUACKS_FAILURE = "REQUEST_QUACKS_FAILURE",
  DISPLAY_QUACKS = "DISPLAY_QUACKS",
}

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

const displayQuacks = (quacks: Array<Object>) => ({
  type: ACTION_TYPES.DISPLAY_QUACKS,
  quacks,
});

const fetchQuacks = () => {};

export { ACTION_TYPES, displayQuacks, fetchQuacks };

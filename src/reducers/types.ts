interface StoreState {
  quacks: [
    {
      data: { id: string; text: string }[];
      meta: {
        oldest_id: string;
        newest_id: string;
        result_count: number;
        next_token: string;
      };
    }
  ];
  isFetching: boolean;
  quacksFetched: boolean;
  quacksDisplayed: boolean;
}

export default StoreState;

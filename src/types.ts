type AuthorMeta = {
  avatar: string;
  first_name: string;
  last_name: string;
  username: string;
};

type QuackData = [
  {
    data: {
      id: string;
      text: string;
      author_id: string;
      conversation_id: string;
      possibly_sensitive: boolean;
      created_at: string;
      authorMeta: AuthorMeta;
    }[];
    meta: {
      oldest_id: string;
      newest_id: string;
      result_count: number;
      next_token: string;
    };
  }
];

type EmptyQuackData = [];

type QuackDataType = QuackData | EmptyQuackData;

export type { AuthorMeta, QuackDataType };

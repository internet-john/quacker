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

type NewsArticle = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: number | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
};

type NewsData = {
  status: string;
  totalResults: number;
  articles: NewsArticle[];
};

type EmptyNewsData = [];

type QuackDataType = QuackData | EmptyQuackData;

type NewsDataType = NewsData | EmptyNewsData;

export type { AuthorMeta, QuackDataType, NewsDataType };

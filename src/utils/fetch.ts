type ResponseObject = {
  meta: { result_count: number };
  data: Array<ReadableStream<Uint8Array> | null | undefined>;
};

type QuackObject = {
  id: number;
  text: string;
};

const getUserTimeline = async () => {
  const userId = 846137120209190912;
  const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=100`;
  const bearerToken = process.env.BEARER_TOKEN;
  let userQuacks: Array<QuackObject>;
  const options = {
    headers: {
      authorization: `Bearer ${bearerToken}`,
    },
  };

  let hasNextPage = true;
  let nextToken = null;
  console.log("Retrieving Tweets...");
  while (hasNextPage) {
    let response: ResponseObject = await getPage(options, nextToken);
    if (
      response &&
      response.meta &&
      response.meta.result_count &&
      response.meta.result_count > 0
    ) {
      if (response.data) {
        userQuacks.push.apply(userQuacks, response.data);
      }
      if (response.meta.next_token) {
        nextToken = response.meta.next_token;
      }
    } else {
      hasNextPage = false;
    }
  }

  console.log(userQuacks);
  console.log(`Got ${userQuacks.length} Tweets from ${username}!`);
};

const getPage = async (options, nextToken) => {
  if (nextToken) {
    params.next_token = nextToken;
  }

  try {
    const response = await fetch(url, options);

    if (response.statusCode != 200) {
      console.log(
        `${response.statusCode} ${response.statusMessage}:\n${response.body}`
      );
      return;
    }
    return response.body;
  } catch (err) {
    throw new Error(`Request failed: ${err}`);
  }
};

export { getUserTimeline };

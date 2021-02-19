import mockFeed from "../mockData";

// const getUserTimeline = async () => {
//   const userId = 846137120209190912;
//   const url = `https://api.twitter.com/2/users/${userId}/tweets?max_results=100`;
//   const bearerToken = process.env.BEARER_TOKEN;
//   const options = {
//     headers: {
//       authorization: `Bearer ${bearerToken}`,
//     },
//   };

//   try {
//     const response = await fetch(url, options);

//     if (response.statusCode != 200) {
//       console.log(
//         `${response.statusCode} ${response.statusMessage}:\n${response.body}`
//       );
//       return;
//     }
//     return response.body;
//   } catch (err) {
//     throw new Error(`Request failed: ${err}`);
//   }
// };
const getUserTimeline = async () => mockFeed;

export default getUserTimeline;

export { getUserTimeline };

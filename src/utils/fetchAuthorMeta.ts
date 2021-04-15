import { RawAuthorMeta } from "../types";

const fetchAvatars = async () => {
  const avatarPayload = await fetch(`https://tinyfac.es/api/users`);

  return await avatarPayload.json();
};

const constructAuthorMeta = (dataObj: RawAuthorMeta) => ({
  username: `@${dataObj.last_name.toLowerCase()}${dataObj.first_name.toLowerCase()}`,
  avatar: dataObj.avatars[0].url,
  first_name: dataObj.first_name,
  last_name: dataObj.last_name,
});

const fetchAuthorMeta = async () => {
  const avatars = await fetchAvatars();

  return avatars.map((data) => constructAuthorMeta(data));
};

export { fetchAvatars, fetchAuthorMeta };

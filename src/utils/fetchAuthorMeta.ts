import { RawAuthorMeta } from "../types";

const fetchAvatars = async () => {
  const [
    avatarPayload,
    avatarPayload2,
    avatarPayload3,
    avatarPayload4,
    avatarPayload5,
  ] = [
    await fetch(`https://tinyfac.es/api/users`),
    await fetch(`https://tinyfac.es/api/users`),
    await fetch(`https://tinyfac.es/api/users`),
    await fetch(`https://tinyfac.es/api/users`),
    await fetch(`https://tinyfac.es/api/users`),
  ];

  return [
    ...(await avatarPayload.json()),
    ...(await avatarPayload2.json()),
    ...(await avatarPayload3.json()),
    ...(await avatarPayload4.json()),
    ...(await avatarPayload5.json()),
  ];
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

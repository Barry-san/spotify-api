import { id, secret } from "./client";
import { getAccessCode } from "./getAccessCode";

export async function getListening() {
  const accessCode = await getAccessCode(id, secret).catch((err) =>
    console.log(err.message)
  );
  if (accessCode) {
    const result = fetch("https://api.spotify.com/v1/me/player", {
      method: "GET",
      headers: {
        authorization: `Bearer ${accessCode}`,
      },
    }).catch(() =>
      console.log("something went wrong. Check your connection and try again.")
    );
    return result;
  }
  return accessCode;
}

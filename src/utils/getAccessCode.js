export async function getAccessCode(id, secret) {
  return await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      authorization: "basic" + btoa(id + ":" + secret),
    },
    body: {
      client_id: id,
      client_secret: secret,
      // grant_type: "client_credentials",
    },
  }).catch(() => console.log("check your connection and try again "));
}

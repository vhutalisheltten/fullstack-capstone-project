export async function loginUser(credentials, token = "") {
  return fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(credentials)
  });
}

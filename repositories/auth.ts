import type { $Fetch, NitroFetchRequest } from "nitropack";

export const authRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async logout() {
    return await fetch("/api/logout", {});
  },
  async login(username: string, password: string) {
    return await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
  },
});

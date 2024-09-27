import type { $Fetch, NitroFetchRequest } from "nitropack";
import type { CatResponse } from "~/types/cat";

export const catsRepository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
  async getCat() {
    return await fetch<CatResponse[]>("/api/cats", {});
  },
});

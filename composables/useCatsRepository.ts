import { catsRepository } from "~/repositories/cats";

export default function useCatsRepository() {
  const { $api } = useNuxtApp();
  return catsRepository($api);
}

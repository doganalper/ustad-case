import { authRepository } from "~/repositories/auth";

export default function useAuthRepository() {
  const { $api } = useNuxtApp();
  return authRepository($api);
}

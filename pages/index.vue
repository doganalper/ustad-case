<script lang="ts" setup>
import type { CatResponse } from "~/types/cat";

definePageMeta({
  middleware: () => {
    const isLoggedIn = useCookie("isLoggedIn");
    if (isLoggedIn.value === undefined) {
      return navigateTo("/login");
    }
  },
});

const authRepo = useAuthRepository();
async function logout() {
  await authRepo.logout();
  navigateTo("/login");
}

const catsRepo = useCatsRepository();
const { data, refresh, status } = await useAsyncData<CatResponse[]>(
  catsRepo.getCat,
  {
    default: () => [],
  },
);
</script>

<template>
  <div class="space-y-2.5 px-1.5 items-center flex flex-col pt-2">
    <h2 class="text-2xl font-bold">Welcome to cats app!</h2>
    <h3 class="text-lg font-semibold">Here is a random cat for you</h3>
    <div class="space-x-1.5 pt-1.5">
      <UButton @click="() => refresh()">Refetch Cat</UButton>
      <UButton @click="logout">Logout</UButton>
    </div>
    <transition name="fade">
      <CatImage v-if="status === 'success'" :cat="data[0]" />
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

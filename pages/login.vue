<script setup lang="ts">
definePageMeta({
  middleware: () => {
    const isLoggedIn = useCookie("isLoggedIn");

    if (isLoggedIn.value) {
      return navigateTo("/");
    }
  },
});

const formState = reactive({
  username: "",
  password: "",
});
const formErrors = reactive({
  username: "",
  password: "",
});
const router = useRouter();

function clearErrors() {
  formErrors.username = "";
  formErrors.password = "";
}

const authRepo = useAuthRepository();
async function handleLogin() {
  clearErrors();
  try {
    await authRepo.login(formState.username, formState.password);

    router.push("/");
  } catch (error: any) {
    const errors = error.data.data;

    if (errors.username) {
      formErrors.username = errors.username;
    } else if (errors.password) {
      formErrors.password = errors.password;
    }
  }
}
</script>

<template>
  <div class="max-w-[400px] mx-auto p-5">
    <UCard>
      <UForm @submit.prevent="handleLogin" :state="formState" class="space-y-2">
        <Input
          v-model="formState.username"
          placeholder="Enter your username"
          :error="formErrors.username"
        />
        <Input
          type="password"
          v-model="formState.password"
          placeholder="Enter your password"
          :error="formErrors.password"
        />
        <UButton type="primary" html-type="submit">Login</UButton>
      </UForm>
    </UCard>
  </div>
</template>

export default defineNuxtPlugin({
  setup() {
    const api = $fetch.create({});

    return {
      provide: { api },
    };
  },
});

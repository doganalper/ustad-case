<script lang="ts" setup>
import type { CatResponse } from "~/types/cat";

defineProps<{ cat: CatResponse }>();
</script>

<template>
  <NuxtImg
    :src="cat.url"
    :width="cat.width"
    :height="cat.height"
    :alt="cat.id"
  />
</template>

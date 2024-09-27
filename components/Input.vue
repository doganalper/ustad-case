<template>
  <div class="space-y-1">
    <UInput
      v-model="inputValue"
      :type="type"
      :class="{ 'border-red-500': error }"
      :placeholder="placeholder"
    />
    <p v-if="error" class="text-red-500 text-xs pl-1">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: string;
  placeholder: string;
  type?: HTMLInputElement["type"];
}>();

const inputValue = defineModel<string>();
</script>

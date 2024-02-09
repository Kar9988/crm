<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  },
  activeContent: {
    type: Object,
    required: true
  },
  resetLoading: {
    type: Number,
    required: true
  }
})
const emits = defineEmits(['save'])
const showLoading = ref<boolean>(false)
watch(() => props.resetLoading, (val) => {
  showLoading.value = false
})

const save = () => {
  showLoading.value = true
  emits('save')
}

const resetLoading = () => {
  showLoading.value = false
}

</script>

<template>
  <div class="p-10">
    <button @click="activeContent.value ? save() : ''" :class="activeContent.value ? 'bg-blue-700 text-white cursor-pointer' : 'bg-white text-gray-800 cursor-not-allowed'" class=" font-semibold py-2 px-4 border border-gray-400 rounded shadow">
      <span v-if="!showLoading">
        {{ props.buttonText }}
      </span>
      <div v-if="props.loading && showLoading" class="w-6 h-6 rounded-full animate-spin border-2 border-solid border-white border-t-transparent"></div>
    </button>
  </div>
</template>

<style scoped>

</style>

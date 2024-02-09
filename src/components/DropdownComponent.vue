<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'

const emits = defineEmits(['selectContent'])

const props = defineProps({
  contents: {
    type: Object,
    required: true
  }
})
const selectedValue = ref<object>(props.contents.default)
const selectContent = (content: object) => {
  selectedValue.value = content
  emits('selectContent', content)
}
</script>

<template>
  <div>
    <div class="p-10">
      <div class="dropdown inline-block relative">
        <button class="min-w-48 bg-gray-300 flex justify-between text-gray-700 font-semibold py-2 px-4 rounded items-center">
          <span class="mr-1">{{ selectedValue.label }}</span>
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </button>
        <ul class="min-w-48 dropdown-menu absolute hidden text-gray-700 pt-1">
          <li v-for="(content, index) in props.contents" :key="index" class="">
            <a @click="selectContent(content)" :class="selectedValue.value === content.value ? 'bg-gray-400' : ''" class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
              {{ content.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

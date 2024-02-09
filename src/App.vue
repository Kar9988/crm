<template>
  <div>
    <div class="app flex justify-center mt-3">
      <DropdownComponent @select-content="selectContent" :contents="contents"></DropdownComponent>
      <ButtonComponent :loading="true" :button-text="'создать'" @save="save" :reset-loading="resetLoading"
                       :active-content="activeContent"></ButtonComponent>
    </div>
    <ItemsListComponent></ItemsListComponent>
  </div>
</template>

<script setup lang="ts">
import DropdownComponent from '@/components/DropdownComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import ItemsListComponent from '@/components/ItemsListComponent.vue'
import { ref, onMounted } from 'vue'
import { useCrmStore } from '@/store/crmStore'
const crmStore = useCrmStore()
const resetLoading = ref<number>(0)

const contents: object = {
  default: {
    label: 'Не выбрано',
    property: null,
    value: null
  },
  deal: {
    label: 'Сделка',
    value: 'leads'
  },
  company: {
    label: 'Компания',
    value: 'companies'
  },
  contact: {
    label: 'Контакт',
    value: 'contacts'
  }
}
const activeContent = ref<object>(contents.default)

const selectContent = (content: object) => {
  activeContent.value = content
}

const save = () => {
  crmStore.getContent(activeContent.value)
    .then(e => {
      resetLoading.value += 1
    })
}
onMounted(() => {
  if (!JSON.parse(localStorage.getItem('crmToken') ?? '')?.token) {
    crmStore.getToken()
  }
})
</script>

<style>

</style>

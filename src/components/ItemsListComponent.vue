<script setup lang="ts">
import { useCrmStore } from '@/store/crmStore.js'

const crmStore = useCrmStore()
</script>

<template>
  <div class="mx-auto w-full h-[700px] overflow-scroll p-2 justify-center">
<!--    <div :key="index" v-for="(content, index) in crmStore.contentList" class="m-2 p-10">-->
<!--      <p>{{content.id}}</p>-->
<!--      <p>{{content.name}}</p>-->
<!--    </div>-->
    <div class="flex flex-col px-2" v-if="crmStore.contentList.length">
      <div class="overflow-x-auto ">
        <div class="inline-block  py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class=" text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
              <tr>
                <th scope="col" class="px-6 py-4" v-for="header in Object.keys(crmStore.contentList[0])" :key="header">{{header.replace(/\_/g, ' ')}}</th>
              </tr>
              </thead>
              <tbody>
              <tr :key="index" v-for="(content, index) in crmStore.contentList"
                class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td :key="`${index}-${propertyIndex}`" v-for="(property, propertyIndex) in Object.keys(content)" class="whitespace-nowrap px-6 py-4">{{ content[property] }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

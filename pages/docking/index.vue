<template>
  <div>
    <h1 class="text-xl font-bold">Dry  Dock</h1>
    <UCard :ui="{
                ring:'ring-0',
                shadow: 'shadow-lg',
                divide:'divide-y-0',
                background: 'bg-slate-100 dark:bg-slate-100',
                header:{
                  base:'mt-10'
                },
                body:{
                  base:'h-40'
                }
                  }">
      <template #header>
        <div class="text-gray-600 font-semibold">Ships docked</div>
        <div class="bg-secondary p-8 mt-5 h-96">
          
        </div>

      </template>
    </UCard>

  </div>
</template>

<script lang="ts" setup>
</script>

<style></style>
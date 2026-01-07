<script setup lang="ts">

const uiContainer = {
  background: 'bg-white',
  padding: 'px-0 sm:px-0 lg:px-0',
  base: 'max-w-screen-2xl mx-0 w-full'
}

</script>

<template>
  <div class="bg-white">
    <UContainer :ui=uiContainer>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UContainer>
  </div>
</template>
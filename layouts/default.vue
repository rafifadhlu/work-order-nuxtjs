<script setup lang="ts">

  const uiContainer= {
    background:'bg-white',
    padding:'px-0 sm:px-0 lg:px-0',
    base:'mx-0 w-full lg:flex flex-row'
  }

  const uiContent = {
    padding:'pt-8'
  }

</script>

<template>
  <div class="bg-white">
    <UContainer :ui=uiContainer>
      <!-- concept: show the header if > lg other than that use footer -->
       <div class="hidden lg:block">
         <LayoutHeader :ui="{ background: '!bg-secondary text-white'}" />
       </div>

      <main class="w-full">
        <!-- place content -->
         <UContainer :ui=uiContent>
         <slot />
         </UContainer>
      </main>

      <div class="block fixed bottom-0 left-0 w-full lg:hidden ">
        <LayoutFooter />
      </div>


    </UContainer>
  </div>
</template>
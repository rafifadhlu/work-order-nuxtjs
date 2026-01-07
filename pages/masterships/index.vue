<template>
  <div class="w-full">
    <h1 class="text-xl font-bold">Ships</h1>
    <UCard :ui="{
      ring: 'ring-0',
      shadow: 'shadow-lg',
      divide: 'divide-y-0',
      background: 'bg-slate-100 dark:bg-slate-100',
      header: {
        base: 'mt-10'
      },
      body: {
        base: 'h-40'
      }
    }">
      <template #header>
        <div class="text-gray-600 font-semibold">
          <div class="header_detail flex justify-between">
            <h1 class="font-semibold pl-2 text-lg">
              New coming
            </h1>
            <NuxtLink to="/masterships">
              <div class="wrapped flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <p>Add ship</p>
              </div>
            </NuxtLink>
          </div>

        </div>
        <div class="p-8 mt-5 h-96">

          <div
            class="wrappercard flex lg:justify-start lg:overflow-visible overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 lg:scrollbar-none">
            <UCard v-for="ship in ships" :key="ship.id" :ui="{
              base: 'mx-2 flex-shrink-0 w-64 h-80',
              ring: 'ring-0',
              shadow: 'shadow-lg',
              divide: 'divide-y-0',
              background: 'bg-slate-100 dark:bg-slate-100',
              body: {
                padding: '!p-0'
              }
            }">
              <template #header>
                <div class="wrapperContentCard text-center">
                  <img src="~/assets/images/ship.jpg" alt="">
                  <h1 class="text-wrap font-bold">
                    {{ ship.ship_name }}
                  </h1>
                </div>
              </template>

              <div class="text-start m-0 px-5">
                <p>
                  {{ ship.regist_number }}
                </p>
                <p>
                  {{ ship.company }}
                </p>

              </div>

              <template #footer>
                <NuxtLink :to="`/masterships/detail/${ship.id}`">
                  Detail
                </NuxtLink>
              </template>

            </UCard>
          </div>
        </div>
      </template>
    </UCard>

  </div>
</template>

<script lang="ts" setup>
const { ships, getAllShips } = useShipData();

await getAllShips();
console.log("Ships in component:", ships.value);

</script>

<style></style>
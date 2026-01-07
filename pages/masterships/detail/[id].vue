<template>
  <div class="w-full">
    <h1 class="text-xl font-bold">Dashboard</h1>
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
        <div class="contentWrapper">
          <div class="header_detail flex justify-between">
            <h1 class="font-semibold pl-2 text-lg">
              {{ ships[0].ship_name }}
            </h1>
            <NuxtLink to="/masterships">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>

            </NuxtLink>
          </div>

          <div class="flex flex-row pt-4 w-full h-96">
            <div class="rightSide w-1/3 pr-4">
              <img src="~/assets/images/ship.jpg" alt="Ship" class="w-full h-full object-cover rounded-lg shadow-md">
            </div>

            <div class="leftSide flex-1 pl-4">
              <div>
                <label for="company">Company</label>
                <p class="font-bold pb-6" name="company">{{ ships[0].company }}</p>
              </div>

              <div>
                <label for="Regist_number">Registration Number</label>
                <p class="font-bold pb-6" name="Regist_number">{{ ships[0].regist_number }}</p>
              </div>

              <div>
                <label for="account_code">Account Code</label>
                <p class="font-bold pb-6" name="account_code">{{ ships[0].account_code }}</p>
              </div>

              <div>
                <label for="responsible_rank">Responsible Rank</label>
                <p class="font-bold pb-6" name="responsible_rank">{{ ships[0].responsible_rank }}</p>
              </div>
            </div>
          </div>


        </div>

      </template>
    </UCard>

  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const shipId = route.params.id;

const { ships, getDetailShip } = useShipData();

await getDetailShip(Number(shipId))
</script>

<style></style>
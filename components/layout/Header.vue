<template>
  <aside class="h-screen w-64 bg-secondary p-4">
    <div class="NavWrapper py-5">
      <div class="Logowrapper flex flex-row items-center pb-5">
        <UAvatar
          size="lg"
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="Avatar"
        />
        <p class="px-5 text-white font-extrabold">
          Workshop
        </p>
      </div>
      <UVerticalNavigation 
        :links="navItems"
        :ui="{
          padding:'py-2',
          label: 'text-white text-lg', 
          icon: {
            active: '!text-white',
            inactive: '!text-white'
          },
        }"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
    // defineProps(['ui'])

    interface items {
      label:string,
      to:string,
      icon:string
    }

    const navItems:items[] = [
      {
        label:'Dashboard',
        to:'/',
        icon:'i-heroicons-presentation-chart-bar'
      },
      {
        label:'Docking',
        to:'/docking',
        icon:'i-heroicons-home'
      },
      {
        label:'Master Ships',
        to:'/masterships',
        icon:'i-heroicons-rectangle-stack'
      },
      {
        label:'Job List',
        to:'/joblist',
        icon:'i-heroicons-clipboard-document-list',
      },
    ]


</script>

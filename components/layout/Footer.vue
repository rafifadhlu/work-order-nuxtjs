<template>
    <footer class="bg-secondary">
        <nav class="flex justify-center w-100">
            <UHorizontalNavigation :links="navItems" :ui="{
                wrapper: 'w-full flex justify-around',
                padding: 'py-2',    
                label: 'text-white text-lg flex justify-around ',
                icon: {
                    base:'text-lg',
                    active: '!text-white',
                    inactive: '!text-white'
                },
            }" />
        </nav>
    </footer>
</template>

<script setup lang="ts">
interface items {
    label: string,
    to: string,
    icon: string
}

const navItems: items[] = [
    {
        label: '',
        to: '/',
        icon: 'i-heroicons-presentation-chart-bar'
    },
    {
        label: '',
        to: '/docking',
        icon: 'i-heroicons-home'
    },
    {
        label: '',
        to: '/masterships',
        icon: 'i-heroicons-rectangle-stack'
    },
    {
        label: '',
        to: '/joblist',
        icon: 'i-heroicons-clipboard-document-list',
    },
]


</script>
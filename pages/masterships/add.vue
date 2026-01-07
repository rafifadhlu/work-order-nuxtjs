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
                <div class="p-6">
                    <h2 class="text-2xl font-bold mb-6">Add New Ship</h2>
                    
                    <div class="w-full max-w-96">
                        <UForm :state="state" @submit="onSubmit" class="space-y-4">
                            <!-- Ship name -->
                            <UFormGroup 
                                label="Ship Name" 
                                name="ship_name" 
                                required
                                :ui="{ label: { base: 'text-black dark:text-black' } }"
                            >
                                <UInput 
                                    v-model="state.ship_name" 
                                    placeholder="Enter ship name"
                                    color="white"
                                    variant="outline"
                                    class="!text-black"
                                    input-class="!text-black !bg-white placeholder:text-gray-400"
                                />
                            </UFormGroup>

                            <!-- Regis Number -->
                            <UFormGroup 
                                label="Registration Number" 
                                name="regist_number" 
                                required
                                :ui="{ label: { base: 'text-black dark:text-black' } }"
                            >
                                <UInput 
                                    v-model="state.regist_number" 
                                    placeholder="Enter registration number"
                                    color="white"
                                    variant="outline"
                                    class="!text-black"
                                    input-class="!text-black !bg-white placeholder:!text-gray-500"
                                />
                            </UFormGroup>

                            <!-- Company -->
                            <UFormGroup 
                                label="Company" 
                                name="company" 
                                required
                                :ui="{ label: { base: 'text-black dark:text-black' } }"
                            >
                                <UInput 
                                    v-model="state.company" 
                                    placeholder="Enter company name"
                                    color="white"
                                    variant="outline"
                                    class="!text-black"
                                    input-class="!text-black !bg-white placeholder:!text-gray-500"
                                />
                            </UFormGroup>

                            <!-- description -->
                            <UFormGroup 
                                label="description" 
                                name="description" 
                                required
                                :ui="{ label: { base: 'text-black dark:text-black' } }"
                            >
                                <UInput 
                                    v-model="state.description" 
                                    placeholder="Enter description"
                                    color="white"
                                    variant="outline"
                                    class="!text-black"
                                    input-class="!text-black !bg-white placeholder:!text-gray-500"
                                />
                            </UFormGroup>

                            <!-- responsible_rank -->
                            <UFormGroup 
                                label="Responsible Rank" 
                                name="responsible_rank" 
                                required
                                :ui="{ label: { base: 'text-black dark:text-black' } }"
                            >
                                <UInput 
                                    v-model="state.responsible_rank" 
                                    placeholder="Whois responsible"
                                    color="white"
                                    variant="outline"
                                    class="!text-black"
                                    input-class="!text-black !bg-white placeholder:!text-gray-500"
                                />
                            </UFormGroup>

                            <div class="flex justify-end">
                                <UButton type="button" color="gray" variant="ghost" @click="handleReset">
                                    Reset
                                </UButton>

                                <UButton type="submit">
                                    Add Ship
                                </UButton>
                            </div>
                        </UForm>
                    </div>

                    <!-- Success Alert -->
                    <UAlert 
                        v-if="showSuccess" 
                        color="green" 
                        variant="subtle" 
                        title="Success!"
                        description="Ship added successfully" 
                        class="mt-4" 
                    />
                </div>
            </template>
        </UCard>
    </div>
</template>

<script lang="ts" setup>
import { reloadNuxtApp } from "nuxt/app";
// Form state
const state = reactive<ShipCreate>({
    ship_name: '',
    regist_number: '',
    account_code: '',
    company: '',
    description: '',
    responsible_rank: ''
})

const showSuccess = ref(false);

const onSubmit = async () => {
    showSuccess.value = false
    const { ships, createShipData } = useShipData();

    try {
        const result = await createShipData(state);
        if(result){
            handleReset();
            showSuccess.value = true;
        } 
    } catch (error) {
        console.error("Failed push data")
    }

}

const handleReset = () => {
    state.ship_name = ''
    state.regist_number = ''
    state.company = ''
    state.description = ''
    state.responsible_rank
}

</script>

<style></style>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/country'

const useCountry = useCountryStore()
const { countries } = storeToRefs(useCountry)

const search = ref('')
</script>

<template>
    <div class="px-2 py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-4">
            <AppInputSearch v-model="search" />
        </div>
        <!-- Countries Grid -->
        <div
            v-if="countries.length"
            class="grid grid-cols-1 gap-16 p-4 px-0 text-lg sm:grid-cols-4"
        >
            <div
                v-for="country in countries"
                :key="country.name.common"
                class="sm:col-span-2 lg:col-span-1"
            >
                <AppCard :country="country" />
            </div>
        </div>
    </div>
</template>

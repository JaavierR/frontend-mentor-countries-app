<script setup lang="ts">
import { useCountryStore } from '@/stores/country'

const useCountry = useCountryStore()

const search = ref('')
const region = ref('Filter by Region')

const filteredCountries = computed(() =>
    useCountry.filterCountries(search.value, region.value)
)

const regionsOption = [
    'Filter by Region',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
]
</script>

<template>
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
            class="flex flex-col justify-center mb-4 space-y-4 md:space-y-0 md:justify-between md:flex-row"
        >
            <AppInputSearch v-model="search" class="md:w-96" />
            <AppSelect
                v-model="region"
                :options="regionsOption"
                class="self-start mx-auto md:mx-0"
            />
        </div>
        <!-- Countries Grid -->
        <div
            v-if="filteredCountries.length"
            class="grid grid-cols-1 gap-10 p-4 px-10 text-lg xl:gap-16 md:px-0 sm:grid-cols-4"
        >
            <div
                v-for="country in filteredCountries"
                :key="country.name.common"
                class="sm:col-span-2 lg:col-span-1"
            >
                <AppCard :country="country" />
            </div>
        </div>
    </div>
</template>

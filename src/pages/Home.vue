<script setup lang="ts">
import { useCountryStore } from '@/stores/country'

const useCountry = useCountryStore()

const search = ref('')

const filteredCountries = computed(() =>
    useCountry.filterCountries(search.value)
)
</script>

<template>
    <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mb-4">
            <AppInputSearch v-model="search" class="md:w-96" />
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

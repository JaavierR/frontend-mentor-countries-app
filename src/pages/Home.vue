<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/country'

const useCountry = useCountryStore()
const { countries } = storeToRefs(useCountry)

useCountry.fetchCountries()
</script>

<template>
    <div
        v-if="countries.length"
        class="grid grid-cols-1 gap-16 p-4 text-lg sm:grid-cols-4"
    >
        <div
            v-for="country in countries"
            :key="country.name.common"
            class="sm:col-span-2 lg:col-span-1"
        >
            <AppCard :country="country" />
        </div>
    </div>
</template>

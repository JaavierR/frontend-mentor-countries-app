<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/country'

const useCountry = useCountryStore()
const { country } = storeToRefs(useCountry)
</script>

<template>
    <div class="px-4 mx-auto max-w-7xl md:px-6 lg:px-8">{{ country }}</div>
</template>

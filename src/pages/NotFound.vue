<script setup lang="ts">
import { FlagIcon } from '@heroicons/vue/solid'
</script>

<template>
    <div class="flex flex-col items-center justify-center h-full space-y-8">
        <img
            src="https://c.tenor.com/z52wz-KWzikAAAAC/power-rangers-yellow-ranger.gif"
            class="rounded-md shadow-md"
        />
        <div class="space-y-2 text-center">
            <h1
                class="text-3xl font-extrabold tracking-tight text-red-700 uppercase"
            >
                The resource not exists
            </h1>
            <RouterLink
                :to="{ name: 'Home' }"
                class="inline-flex items-center px-8 py-2 my-4 mb-10 rounded-sm shadow-md md:mb-6 bg-dark-blue hover:bg-white hover:bg-opacity-50"
            >
                <FlagIcon class="w-5 h-5 mr-2" />
                Back to home
            </RouterLink>
        </div>
    </div>
</template>

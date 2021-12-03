<template>
    <div class="shadow-md">
        <div
            class="px-2 mx-auto shadow-md max-w-7xl sm:px-6 lg:px-8 bg-dark-blue"
        >
            <div class="relative flex items-center justify-between h-16">
                <div class="text-lg font-extrabold tracking-wide">
                    Where in the world?
                </div>
                <div class="flex space-x-4">
                    <div class="cursor-pointer hover:text-gray-500">
                        <MoonIcon class="w-5 h-5" />
                    </div>
                    <div class="cursor-pointer hover:text-gray-500">
                        <TranslateIcon class="w-5 h-5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { MoonIcon, TranslateIcon } from '@heroicons/vue/solid'
</script>

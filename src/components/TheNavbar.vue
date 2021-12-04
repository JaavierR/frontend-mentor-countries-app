<script setup lang="ts">
import { MoonIcon, TranslateIcon } from '@heroicons/vue/solid'
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
    const locales = availableLocales
    locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
    <div
        class="fixed top-0 z-50 w-full bg-opacity-75 shadow-md bg-dark-blue backdrop-filter backdrop-blur-md"
    >
        <div class="shadow-md">
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <RouterLink
                        :to="{ name: 'Home' }"
                        class="text-xl font-extrabold tracking-wide"
                    >
                        {{ t('navbar.title') }}
                    </RouterLink>
                    <div class="flex space-x-4">
                        <div
                            :title="t('navbar.toggle_dark')"
                            class="cursor-pointer hover:text-teal-500"
                        >
                            <MoonIcon class="w-5 h-5" />
                        </div>
                        <div
                            class="cursor-pointer hover:text-teal-500"
                            :title="t('navbar.toggle_langs')"
                            @click.prevent="toggleLocales"
                        >
                            <TranslateIcon class="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

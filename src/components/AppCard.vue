<script setup lang="ts">
import Country from '@/types/Country'
import { numberToI18n } from '@/helpers'

defineProps<{ country: Country }>()

const { t, locale } = useI18n()
</script>

<template>
    <div
        class="block overflow-hidden bg-white rounded-md shadow-md dark:bg-dark-blue"
    >
        <div class="relative pb-[56%]">
            <img
                :src="country.flags.svg"
                :alt="`${country.name.common} flag`"
                class="absolute object-cover w-full h-full"
            />
        </div>
        <div class="p-6 capitalize">
            <h4
                class="mb-4 font-extrabold truncate"
                :title="country.name.common"
            >
                {{ country.name.common }}
            </h4>
            <div class="mb-6 space-y-2 text-sm font-light">
                <p
                    class="truncate"
                    :title="numberToI18n(country.population, locale)"
                >
                    <span class="font-semibold">
                        {{ t('country.population') }}:
                    </span>
                    {{ numberToI18n(country.population, locale) }}
                </p>
                <p class="truncate" :title="t(`region.${country.region}`)">
                    <span class="font-semibold">
                        {{ t('country.region') }}:
                    </span>
                    {{ t(`region.${country.region}`) }}
                </p>
                <p class="truncate" :title="country.capital[0]">
                    <span class="font-semibold">
                        {{ t('country.capital') }}:
                    </span>
                    {{ country.capital[0] }}
                </p>
            </div>
        </div>
    </div>
</template>

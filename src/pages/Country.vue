<script setup lang="ts">
import { ArrowNarrowLeftIcon } from '@heroicons/vue/solid'
import { storeToRefs } from 'pinia'
import { onBeforeRouteUpdate } from 'vue-router'
import { useCountryStore } from '@/stores/country'
import { numberToI18n } from '@/helpers'

const useCountry = useCountryStore()
const loading = ref(false)
const { country } = storeToRefs(useCountry)
const { t, locale } = useI18n()

onBeforeRouteUpdate(async (to) => {
    loading.value = true
    await useCountry.fetchCountry(to.params.countryName as string)
    if (useCountry.countries.length < 100) {
        await useCountry.fetchCountriesByCode(useCountry.getBorderCodes)
    }
    loading.value = false
})
</script>

<template>
    <div v-if="!loading" class="px-8 py-8 mx-auto max-w-7xl">
        <RouterLink
            :to="{ name: 'Home' }"
            class="inline-flex items-center px-8 py-2 my-4 mb-10 rounded-sm shadow-md md:mb-6 hover:bg-dark-gray dark:bg-dark-blue dark:hover:bg-opacity-50 dark:hover:bg-white hover:bg-opacity-50"
        >
            <ArrowNarrowLeftIcon class="w-5 h-5 mr-2" />
            {{ t('back') }}
        </RouterLink>
        <div
            class="grid grid-cols-1 capitalize md:grid-cols-2 gap-x-12 xl:gap-x-32"
        >
            <div class="flex items-center justify-center h-full my-auto mb-14">
                <img
                    :src="country.flags.svg"
                    :alt="`${country.name.common} flag`"
                />
            </div>
            <div class="my-auto space-y-10">
                <h1 class="mb-8 text-3xl font-extrabold">
                    {{ country.name.common }}
                </h1>
                <div
                    class="grid grid-cols-1 space-y-12 sm:space-y-0 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 md:space-y-12 lg:space-y-0 xl:gap-x-12"
                >
                    <div class="space-y-2">
                        <AppCountryFieldInfo
                            :title="t('country.native_name')"
                            :info="
                                Object.values(country.name.nativeName)[0]
                                    ?.common
                            "
                        />
                        <AppCountryFieldInfo
                            :title="t('country.population')"
                            :info="numberToI18n(country.population, locale)"
                        />
                        <AppCountryFieldInfo
                            :title="t('country.region')"
                            :info="country.region"
                        />
                        <AppCountryFieldInfo
                            :title="t('country.subregion')"
                            :info="country.subregion"
                        />
                        <AppCountryFieldInfo
                            :title="t('country.capital')"
                            :info="country.capital[0]"
                        />
                    </div>
                    <div class="space-y-2">
                        <AppCountryFieldInfo
                            :title="t('country.tld')"
                            :info="country.tld[0]"
                        />
                        <AppCountryFieldInfo
                            :title="t('country.currencies')"
                            :info="
                                Object.values(country.currencies)
                                    .map((currency) => currency.name)
                                    .join(', ')
                            "
                        />
                        <AppCountryFieldInfo
                            :title="t('country.languages')"
                            :info="Object.values(country.languages).join(', ')"
                        />
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 space-y-5 xl:space-y-0 xl:grid-cols-9"
                >
                    <span
                        class="col-span-3 mr-2 text-lg font-semibold truncate"
                    >
                        {{ t('country.border_countries') }}:
                    </span>
                    <div class="grid grid-cols-3 col-span-6 gap-3 md:gap-2">
                        <template
                            v-for="borderCode in country.borders"
                            :key="borderCode"
                        >
                            <RouterLink
                                :to="{
                                    name: 'Country',
                                    params: {
                                        countryName: useCountry
                                            .getCountryNamesByCode(borderCode)
                                            .toLowerCase(),
                                    },
                                }"
                                class="inline-block py-1.5 text-center rounded-sm shadow-md hover:bg-dark-gray dark:bg-dark-blue dark:hover:bg-white hover:bg-opacity-50 dark:hover:bg-opacity-50 px-2 truncate"
                                :title="
                                    useCountry.getCountryNamesByCode(borderCode)
                                "
                            >
                                {{
                                    useCountry.getCountryNamesByCode(borderCode)
                                }}
                            </RouterLink>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

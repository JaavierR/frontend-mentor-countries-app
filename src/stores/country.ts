import { defineStore } from 'pinia'
import apiCountry from '@/services/Country'
import Country from '@/types/Country'

interface State {
    countries: Country[]
}

export const useCountryStore = defineStore('country', {
    state: (): State => ({
        countries: [],
    }),
    actions: {
        async fetchCountries(): Promise<void> {
            const { data } = await apiCountry.fetchCountries()
            this.countries = data
        },
    },
    getters: {
        getCountryById: (state) => {
            return (countryName: string) =>
                state.countries.find(
                    (country: Country) => country.name.common === countryName
                )
        },
        filterCountries: (state) => {
            return (countryName = '') => {
                if (!countryName) return state.countries

                return state.countries.filter((country: Country) =>
                    country.name.common
                        .toLowerCase()
                        .includes(countryName.toLowerCase())
                )
            }
        },
    },
})

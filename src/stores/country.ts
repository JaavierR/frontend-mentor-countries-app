import { defineStore } from 'pinia'
import apiCountry from '@/services/Country'
import Country from '@/types/Country'

interface State {
    countries: Country[]
    country: Country
}

export const useCountryStore = defineStore('country', {
    state: (): State => ({
        countries: <Country[]>[],
        country: <Country>{},
    }),
    actions: {
        async fetchCountries(): Promise<void> {
            const { data } = await apiCountry.fetchCountries()
            this.countries = data
        },
        async fetchCountry(countryName: string): Promise<void> {
            const { data } = await apiCountry.fetchCountry(countryName)
            this.country = data
        },
    },
    getters: {
        getCountryByName:
            (state) =>
            (countryName: string): Country | undefined =>
                state.countries.find(
                    (country: Country): boolean =>
                        country.name.common === countryName
                ),
        filterCountries(state) {
            return (countryName = '', regionName = ''): Country[] => {
                if (
                    !countryName &&
                    (!regionName || regionName === 'Filter by Region')
                )
                    return state.countries

                return state.countries.filter(
                    (country: Country): boolean =>
                        this.filterByName(country.name.common, countryName) &&
                        this.fitlerByRegion(country.region, regionName)
                )
            }
        },
        filterByName:
            () =>
            (countryNameArray: string, countryName: string): boolean =>
                countryNameArray
                    .toLowerCase()
                    .includes(countryName.toLowerCase()),
        fitlerByRegion:
            () =>
            (countryRegionArray: string, countryRegion: string): boolean =>
                countryRegion !== 'Filter by Region'
                    ? countryRegionArray.toLowerCase() ===
                      countryRegion.toLowerCase()
                    : true,
    },
})

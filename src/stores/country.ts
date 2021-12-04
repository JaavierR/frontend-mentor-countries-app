import { defineStore } from 'pinia'
import apiCountry from '@/services/Country'
import Country from '@/types/Country'

interface State {
    countries: Country[]
    country: Country
}

export const useCountryStore = defineStore('country', {
    state: (): State => ({
        countries: [],
        country: <Country>{},
    }),
    actions: {
        async fetchCountries(): Promise<void> {
            const { data } = await apiCountry.fetchCountries()
            this.countries = data
        },
        async fetchCountry(countryName: string): Promise<void> {
            const { data } = await apiCountry.fetchCountry(countryName)
            this.country = data[0]
        },
        async fetchCountriesByCode(codes: string): Promise<void> {
            const { data } = await apiCountry.fetchCountriesByCode(codes)
            this.countries = data
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
        getCountryNameByFifa:
            (state) =>
            (code: string): string | undefined =>
                state.countries.find(
                    (country: Country): boolean => country.cca3 === code
                )?.name.common,
        filterCountries(state) {
            return (countryName = '', regionName = ''): Country[] => {
                if (!countryName && (!regionName || regionName === 'all'))
                    return state.countries

                return state.countries.filter(
                    (country: Country): boolean =>
                        this.filterByName(country.name.common, countryName) &&
                        this.fitlerByRegion(country.region, regionName)
                )
            }
        },
        getBorderCodes: (state) => state.country.borders?.join(','),
        filterByName:
            () =>
            (countryNameArray: string, countryName: string): boolean =>
                countryNameArray
                    .toLowerCase()
                    .includes(countryName.toLowerCase()),
        fitlerByRegion:
            () =>
            (countryRegionArray: string, countryRegion: string): boolean =>
                countryRegion !== 'all'
                    ? countryRegionArray.toLowerCase() ===
                      countryRegion.toLowerCase()
                    : true,
    },
})

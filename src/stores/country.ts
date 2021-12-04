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
            if (this.countries.length > 100) return
            const { data } = await apiCountry.fetchCountries()
            this.countries = data
        },
        async fetchCountry(countryName: string): Promise<void> {
            const existingCountry = this.countries.find(
                (country) =>
                    country.name.common.toLowerCase() ===
                    countryName.toLowerCase()
            )

            if (existingCountry) {
                this.country = existingCountry
            } else {
                const { data } = await apiCountry.fetchCountry(countryName)
                this.country = data[0]
            }
        },
        async fetchCountriesByCode(codes: string): Promise<void> {
            try {
                const { data } = await apiCountry.fetchCountriesByCode(codes)
                this.countries = data
            } catch (error) {}
        },
    },
    getters: {
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
        getBorderCodes: (state): string => state.country.borders?.join(','),
        getCountryByName:
            (state) =>
            (countryName: string): Country =>
                state.countries.find(
                    (country: Country): boolean =>
                        country.name.common === countryName
                ) as Country,
        getCountryNamesByCode:
            (state) =>
            (code: string): string =>
                state.countries.find(
                    (country: Country): boolean => country.cca3 === code
                )?.name.common as string,
    },
})

// import { AxiosResponse } from 'axios'
import { AxiosResponse } from 'axios'
import { apiClient } from '@/services/Axios'

const fields =
    'fields=name,capital,region,subregion,population,flags,borders,languages,currencies,tld,cca3'

export default {
    fetchCountries: async (): Promise<AxiosResponse> => {
        return await apiClient.get(`/all?${fields}`)
    },
    fetchCountry: async (countryName: string): Promise<AxiosResponse> => {
        return await apiClient.get(
            `/name/${countryName}?fullText=true&${fields}`
        )
    },
    fetchCountriesByCode: async (codes: string): Promise<AxiosResponse> => {
        return await apiClient(`/alpha?codes=${codes}&${fields}`)
    },
}

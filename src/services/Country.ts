// import { AxiosResponse } from 'axios'
import { AxiosResponse } from 'axios'
import { apiClient } from '@/services/Axios'

const fields =
    'fields=name,capital,region,subregion,population,flags,borders,languages,currencies,topLevelDomain'

export default {
    fetchCountries: async (): Promise<AxiosResponse> => {
        return await apiClient.get(`/all?${fields}`)
    },
    fetchCountry: async (countryName: string): Promise<AxiosResponse> => {
        return await apiClient.get(
            `/name/${countryName}?fullText=true&${fields}`
        )
    },
}

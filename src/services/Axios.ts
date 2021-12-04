import axios, { AxiosInstance, AxiosResponse } from 'axios'

export const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

apiClient.interceptors.response.use(
    (response): AxiosResponse => {
        return response
    },
    (error): Promise<never> => {
        return Promise.reject(error.response)
    }
)

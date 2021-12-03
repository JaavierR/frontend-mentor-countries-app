import axios, { AxiosInstance } from 'axios'

export const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

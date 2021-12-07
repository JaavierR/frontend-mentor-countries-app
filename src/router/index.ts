import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'

import NProgress from 'nprogress'
import { AxiosResponse } from 'axios'
import { useCountryStore } from '@/stores/country'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'DefaultLayout',
        component: () => import('@/layouts/LayoutDefault.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/pages/Home.vue'),
                async beforeEnter(to) {
                    try {
                        const country = useCountryStore()
                        if (country.countries.length < 100) {
                            await country.fetchCountries()
                        }
                    } catch (error: unknown) {
                        const e: AxiosResponse = error as AxiosResponse
                        if (e.status === 404) {
                            return {
                                name: 'NotFound',
                                query: { redirect: to.fullPath },
                            }
                        }
                    }
                },
            },
            {
                path: ':countryName',
                name: 'Country',
                props: true,
                component: () => import('@/pages/Country.vue'),
                async beforeEnter(to) {
                    try {
                        const country = useCountryStore()
                        await country.fetchCountry(
                            to.params.countryName as string
                        )
                        if (country.countries.length < 100) {
                            await country.fetchCountriesByCode(
                                country.getBorderCodes
                            )
                        }
                    } catch (error: unknown) {
                        const e: AxiosResponse = error as AxiosResponse
                        if (e.status === 404) {
                            return {
                                name: 'NotFound',
                                query: { redirect: to.fullPath },
                            }
                        }
                    }
                },
            },
            {
                path: '404/:pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('@/pages/NotFound.vue'),
            },
        ],
    },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(() => {
    NProgress.start()
})
router.afterEach(() => {
    NProgress.done()
})

export default router

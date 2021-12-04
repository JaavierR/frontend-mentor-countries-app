import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'

import NProgress from 'nprogress'
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
                async beforeEnter() {
                    try {
                        const country = useCountryStore()
                        await country.fetchCountries()
                    } catch (error) {}
                },
            },
            {
                path: '/:countryName',
                name: 'Country',
                props: true,
                component: () => import('@/pages/Country.vue'),
                async beforeEnter(to) {
                    try {
                        const country = useCountryStore()
                        if (!country.countries.length) {
                            await country.fetchCountry(
                                to.params.countryName as string
                            )
                            await country.fetchCountriesByCode(
                                country.getBorderCodes
                            )
                        }
                    } catch (error) {}
                },
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

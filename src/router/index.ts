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

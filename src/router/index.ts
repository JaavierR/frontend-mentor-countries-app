import {
    createRouter,
    createWebHistory,
    Router,
    RouteRecordRaw,
} from 'vue-router'

import NProgress from 'nprogress'

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

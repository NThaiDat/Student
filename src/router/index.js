import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import search from "@/components/search";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HelloWorld
    },
    {
        path: '/search',
        name: 'Search',
        component: search
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router

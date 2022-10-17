import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home";
import ShortAdvertisementList from "@/components/ShortAdvertisement/ShortAdvertisementList";
import Advertisement from "@/components/Advertisement/Advertisement";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/advertisements',
        name: 'advertisements',
        component: ShortAdvertisementList
    },
    {
        path: '/advertisements/:id',
        name: 'advertisement',
        component: Advertisement
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})
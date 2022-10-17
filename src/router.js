import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home";
import ShortAdvertisementList from "@/components/ShortAdvertisement/ShortAdvertisementList";
import Advertisement from "@/components/Advertisement/Advertisement";
import CreateAdvertisement from "@/components/Advertisement/CreateAdvertisement";

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
    },
    {
        path: '/advertisements/new',
        name: 'create-advertisement',
        component: CreateAdvertisement
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes: routes
})
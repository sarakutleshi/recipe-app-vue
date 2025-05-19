// src/router/index.ts or index.js
import { createRouter, createWebHistory } from 'vue-router';
import GuestHomeView from '@/views/GuestHomeView.vue';
import GuestRecipeView from '@/views/guest/GuestRecipeView.vue';
import UserHomeView from '@/views/UserHomeView.vue';
import ViewRecipe from '@/views/ViewRecipe.vue';
import BlogView from "@/views/BlogView.vue";
import AboutView from "@/views/AboutView.vue";
import LogInView from "@/views/auth/LogInView.vue";
import SignUpView from "@/views/auth/SignUpView.vue";

const routes = [
    {
        path: '/',
        name: 'guest-home',
        component: GuestHomeView,
    }, {
        path: '/log-in',
        name: 'log-in',
        component: LogInView,
    },{
        path: '/sign-up',
        name: 'sign-up',
        component: SignUpView,
    },
    {
        path: '/guest-recipe',
        name: 'guest-recipe',
        component: GuestRecipeView,
    },
    {
        path: '/user-home',
        name: 'user-home',
        component: UserHomeView,
    }, {
        path: '/blog',
        name: 'blog',
        component: BlogView,
    },{
        path: '/about',
        name: 'about',
        component: AboutView,
    },
    {
        path: '/views-recipes/:id',
        name: 'views-recipes',
        component: ViewRecipe,
    }, {
        path: '/blog/:id',
        name: 'blogs',
        component: BlogView,
    },
];

// ✅ Create the router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

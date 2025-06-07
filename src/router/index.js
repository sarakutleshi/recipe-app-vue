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
import {useAuthStore} from "@/stores/auth.js";

const routes = [
    {
        path: '/',
        name: 'guest-home',
        component: GuestHomeView,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: '/auth/log-in',
        name: 'login',
        component: LogInView,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: '/auth/sign-up',
        name: 'signup',
        component: SignUpView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/guest-client',
        name: 'guest-recipe',
        component: GuestRecipeView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/client-home',
        name: 'user-home',
        component: UserHomeView,
        meta: {
            requiresAuth: true,
        }
    }, {
        path: '/blog',
        name: 'blog',
        component: BlogView,
        meta: {
            requiresAuth: true,
        }
    },{
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/views-recipes/:id',
        name: 'views-recipes',
        component: ViewRecipe,
        meta: {
            requiresAuth: true,
        }
    }, {
        path: '/blog/:id',
        name: 'blogs',
        component: BlogView,
        meta: {
            requiresAuth: true,
        }
    },
    // {
    //     path: '/newRecipe',
    //     name: 'new-client',
    //     component: NewRecipe,
    //     meta: {
    //         requiresAuth: true,
    //     }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

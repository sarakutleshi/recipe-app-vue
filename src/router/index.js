// src/router/index.ts or index.js
import { createRouter, createWebHistory } from 'vue-router';
import GuestHomeView from '@/views/guest/GuestHomeView.vue';
import GuestRecipeView from '@/views/guest/GuestRecipeView.vue';
import UserHomeView from '@/views/users/UserHomeView.vue';
import ViewRecipe from '@/views/ViewRecipe.vue';
import BlogView from "@/views/shared/BlogView.vue";
import AboutView from "@/views/shared/AboutView.vue";
import SignUpView from "@/views/auth/SignUpView.vue";
import Recipes from "@/router/recipes.js";
import AuthView from "@/views/auth/AuthView.vue";

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
        component: AuthView,
        meta: {
            requiresAuth: false,
        }
    },{
        path: '/auth/sign-up',
        name: 'signup',
        component: SignUpView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/guest-recipe',
        name: 'guest-recipe',
        component: GuestRecipeView,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/user-home',
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
        path: '/views-recipe/:id',
        name: 'views-recipe',
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
    ...Recipes

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

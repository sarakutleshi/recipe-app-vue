// src/router/index.ts or index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import GuestHomeView from '@/views/GuestHomeView.vue';
import GuestRecipeView from '@/views/guest/GuestRecipeView.vue';
import UserHomeView from '@/views/UserHomeView.vue';
import ViewRecipe from '@/views/ViewRecipe.vue';

const routes = [
    {
        path: '/',
        name: 'guest-home',
        component: GuestHomeView,
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
    },
    {
        path: '/views-recipes/:id',
        name: 'views-recipes',
        component: ViewRecipe,
    },
];

// ✅ Create the router instance
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

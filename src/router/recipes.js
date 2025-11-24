import Index from "@/views/recipes/Index.vue";
import NewRecipe from "@/views/recipes/NewRecipe.vue";

export default [
    {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
            requiresAuth: true,
        }
    }, {
        path: '/new',
        name: 'new',
        component: NewRecipe,
        meta: {
            requiresAuth: true,
        }
    }

    ]

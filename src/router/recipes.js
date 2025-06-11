import Index from "@/views/recipes/Index.vue";
import NewRecipe from "@/views/recipes/NewRecipe.vue";
import Details from "@/views/recipes/Details.vue";

export default [
    {
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: '/new',
        name: 'new-recipe',
        component: NewRecipe,
        meta: {
            requiresAuth: false,
        }
    }, {
        path: '/details/:id',
        name: 'details',
        component: Details,
        meta: {
            requiresAuth: false,
        }
    },


    ]

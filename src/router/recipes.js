import Index from "@/views/recipes/Index.vue";
import NewRecipe from "@/views/recipes/NewRecipe.vue";
import Details from "@/views/recipes/Details.vue";
import Delete from "@/views/recipes/Delete.vue";

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
        name: 'new-recipe',
        component: NewRecipe,
        meta: {
            requiresAuth: true,
        }
    }, {
        path: '/delete/:id',
        name: 'delete',
        component: Delete,
        meta: {
            requiresAuth: true,
        }
    }, {
        path: '/details/:id',
        name: 'details',
        component: Details,
        meta: {
            requiresAuth: true,
        }
    }


    ]

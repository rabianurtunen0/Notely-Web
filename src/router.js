import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
    {
        path: '/startseite', 
        name: 'Startseite',
        component: () => import("@/views/Startseite"),

    },

    {
        path: '/login', 
        name: 'LogInPage',
        component: () => import("@/views/LogIn"),
    },

    {
        path: '/signup', 
        name: 'SignUpPage',
        component: () => import("@/views/SignUp"),
    },

    {
        path: '/forgotpassword',
        name: 'RefreshPasswordPage',
        component: () => import("@/views/RefreshPassword"),
    },

    {
        path: '/home',
        name: 'NotelyHomePage',
        component: () => import("@/views/NotelyHome"),
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
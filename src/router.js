import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
    {
        path: '/', 
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
        path: '/refreshpassword',
        name: 'RefreshPasswordPage',
        component: () => import("@/views/RefreshPassword"),
    },

    {
        path: '/notes',
        name: "Notes",
        component: () => import("@/views/NotesPage"),
    },

    {
        path: '/labels',
        name: "Labels",
        component: () => import("@/views/LabelsPage"),
    },

    {
        path: '/archive',
        name: "Archive",
        component: () => import("@/views/ArchivePage"),
    },

    {
        path: '/trash',
        name: "Trash",
        component: () => import("@/views/TrashPage"),
    },

    {
        path: '/settings',
        name: "Settings",
        component: () => import("@/views/SettingsPage"),
    },
   
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
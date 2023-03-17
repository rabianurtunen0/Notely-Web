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
    },

    {
        path: '/toDoList',
        name: "ToDoList",
        component: () => import("@/views/ToDoListPage"),
    },

    {
        path: '/note',
        name: "Note",
        component: () => import("@/views/NotePage"),
    },

    {
        path: '/label',
        name: "Label",
        component: () => import("@/views/LabelPage"),
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
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
        name: "toDoList",
        component: () => import("@/views/ToDoList"),
    },

    {
        path: '/note',
        name: "note",
        component: () => import("@/views/Note"),
    },

    {
        path: '/label',
        name: "Label",
        component: () => import("@/views/Label"),
    },

    {
        path: '/notesOfLabel',
        name: "notesOfLabel",
        component: () => import("@/views/NotesOfLabel"),
    },

    {
        path: '/archive',
        name: "archive",
        component: () => import("@/views/Archive"),
    },

    {
        path: '/trash',
        name: "trash",
        component: () => import("@/views/Trash"),
    },

    {
        path: '/settings',
        name: "settings",
        component: () => import("@/views/Settings"),
    },

    {
        path: '/notesOfLabel',
        name: "notesOfLabels",
        component: () => import("@/views/NotesOfLabel")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
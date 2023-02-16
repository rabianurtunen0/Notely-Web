import { createApp } from 'vue'
import App from './App.vue'

import './input.css';

import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap-icons/font/bootstrap-icons';
import YartuUIKit from "@yartu/ui-kit";

library.add(fas, faUserSecret)
const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(YartuUIKit)
app.mount('#app')


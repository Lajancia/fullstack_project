import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './assets/tailwind.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VCalendar from 'v-calendar';
import router from './router'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import store  from './store';

// createApp(App).mount('#app')


const app = createApp(App).use(router)
app.use(store)
app.use(VueAxios, axios)
app.use('$http',axios)
app.use(PerfectScrollbar)
app.use(ElementPlus)
app.use(VCalendar, {})
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap';
//  createApp(App).mount('#app')
//
// App.use(router);
const app = createApp(App);
app.use(router);
app.mount('#app');

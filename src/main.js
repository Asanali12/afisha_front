import App from './App.vue'
import router from "./router"
import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios';
//import store from '@/store/index.js';

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'https://gabbyblog.herokuapp.com/';


const app = createApp(App);

app.use(router);

//app.use(store)

app.mount('#app');
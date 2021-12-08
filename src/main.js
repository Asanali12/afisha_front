import App from './App.vue'
import router from "./router"
import {createApp} from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import axios from 'axios';
import { createStore } from 'vuex'
import { auth } from './store/auth.js';
import createPersistedState from "vuex-persistedstate";

axios.defaults.baseURL = 'http://ec2-3-17-146-147.us-east-2.compute.amazonaws.com:8080/'


const store = createStore({
	plugins: [createPersistedState()],
	modules: {
        auth
	}
});

const app = createApp(App);

app.use(router);

app.use(store)

app.mount('#app');
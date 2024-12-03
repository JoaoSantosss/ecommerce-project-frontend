import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/styles/global.css'
import 'ionicons';

const app = createApp(App)

app.use(router);
app.mount('#app')

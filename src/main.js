import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia';
import { registerPlugins } from '@/plugins'
import { validationSchema } from './validate/config';
// main.js
import JsonCSV from 'vue-json-csv'

const app = createApp(App)
// const pinia = createPinia();

app.config.globalProperties.validationSchema = validationSchema;

// app.use(pinia)

registerPlugins(app)

app.component('downloadCsv', JsonCSV)
app.mount('#app')

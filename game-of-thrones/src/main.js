import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Vue from 'vue'
// import Vuesax from 'vuesax' //import dependency
// import 'vuesax/dist/vuesax.css' // import css style

import { VuesticPlugin } from 'vuestic-ui' // <-
import 'vuestic-ui/dist/vuestic-ui.css' // <-

const app = createApp(App);

app.use(VuesticPlugin);
// Vue.use(Vuesax) // implement Vuesax throughout the application

app.use(router).mount('#app');

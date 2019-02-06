
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');



window.Vue = require('vue');

// Vuetyfi
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
// import VuePlyr from 'vue-plyr';
// import 'vue-plyr/dist/vue-plyr.css';

import VueSweetalert2 from 'vue-sweetalert2';

//import style
import 'vuetify/dist/vuetify.min.css';

// Import Vuex
import store from './store/store'




Vue.use(VueSweetalert2);
// Vue.use(VuePlyr)
Vue.use(Vuetify)
Vue.use(VueRouter)


let routes = [

    {
        path: '/',
        component: require('./components/News.vue')
        // component: require('./components/Loading.vue')
    },
    {
        path: '/update',
        component: require('./components/Updates.vue')
        // component: require('./components/Loading.vue')
    },
    {
        path: '/tv',
        component: require('./components/Tv.vue')
    },
    {
        path: '/radio',
        component: require('./components/Radio.vue')
    },
    {
        path: '/contact',
        component: require('./components/Contact.vue')
    },
    {
        path: '/post/:id',
        component: require('./components/SingleVideo.vue')
    },
    {
        path: '/news/:id',
        component: require('./components/SingleNews.vue')
    }
]


const router = new VueRouter({
    // mode: 'history',
    routes // short for `routes: routes`
})
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

Vue.component('example-component', require('./components/ExampleComponent.vue'));


Vue.component('app-header', require('./components/structure/HeaderNav.vue'));
Vue.component('base-app', require('./components/structure/BaseApp.vue'));
Vue.component('footer-nav', require('./components/structure/FooterNav.vue'));
Vue.component('spiner-basic', require('./components/enhansments/Spiner.vue'));
Vue.component('news-carousel', require('./components/subcompornents/NewsCarousel.vue'));
Vue.component('youtube-player-iframe', require('./components/subcompornents/YoutubePlayerIframe.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    store,
    router
});

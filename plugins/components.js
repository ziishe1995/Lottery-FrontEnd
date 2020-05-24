import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Footer from '../components/Footer'
// import ScrollTop from '../components/ScrollTop'
import Dashboard from '../components/Dashboard'
// Vue.component('ScrollTop', ScrollTop)
// Vue.component('Paginator', Paginator)
// Vue.component('VideoItem', VideoItem)

//
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Paginator from '../components/Paginator'

Vue.component('Dashboard', Dashboard)
Vue.component('Footer', Footer)
Vue.use(BootstrapVue)
//
Vue.component('Paginator', Paginator)

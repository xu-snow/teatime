import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import store from './store'
import TimeEntries from './components/TimeEntries.vue'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes=[{
	path:'/',
	component:Home
},{
	path:'/home',
	component:Home
},{
	path:'/time-entries',
	component:TimeEntries,
	children:[{
		path:'log-time',
		component:resolve =>require(['./components/LogTime.vue'],resolve)
	}]
}];

const router=new VueRouter({
	routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

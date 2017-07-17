import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

import Home from '../containers/Home'
import Dashboard from '../containers/Dashboard'
import Projects from '../containers/Projects'

// application routes
const routes = [
    { path: '/', component: Home },
    { path: '/dashboard', component: Dashboard },
    { path: '/projects', component: Projects }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})

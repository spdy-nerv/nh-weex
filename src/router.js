/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/pages/list/index'
import Apply from '@/pages/apply/index'
import F from '@/pages/form/index'
import Login from '@/pages/login/index'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: '/pages/list/index',
			name: 'List',
      component: List
		},
		{
			path: '/pages/apply/index',
			name: 'Apply',
      component: Apply
		},
		{
			path: '/pages/form/index',
			name: 'Form',
      component: F
		},
		{
			path: '/pages/login/index',
			name: 'Login',
      component: Login
		},
  ]
})

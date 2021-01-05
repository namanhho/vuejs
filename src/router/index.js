import Vue from 'vue'
import Router from 'vue-router'
import Employee from '@/views/Employee'
import Demo from '@/components/Demo'
import AddEmployee from '@/views/AddEmployee'
import ListTimeSheet from '@/views/ListTimeSheet/ListTimeSheet'
Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/abc',
  routes: [
    {
      path: '/',
      name: 'ListTimeSheet',
      component: ListTimeSheet
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/add-employee',
      name: 'AddEmployee',
      component: AddEmployee
    },
    {
      path: '/ListTimeSheet',
      name: 'ListTimeSheet',
      component: ListTimeSheet
    },
  ]
})

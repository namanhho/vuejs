import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PropDemo from '@/components/PropDemo'
import Employee from '@/components/Employee'
import Demo from '@/components/Demo'
import AddEmployee from '@/components/AddEmployee'
// import DropDownInput from '@/components/DropDownInput'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/prop',
      name: 'PropDemo',
      component: PropDemo
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
    // {
    //   path: '/test',
    //   name: 'DropDownInput',
    //   component: DropDownInput
    // }
  ]
})

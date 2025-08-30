import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/HomeView";
import CarFull from "@/components/CarFull";
import ErrorCmp from "@/components/Error";

Vue.use(VueRouter)

const Cars = resolve => {
  require.ensure(['@/views/CarsView'], () => {
    resolve(
        require('@/views/CarsView'),
    )
  })
}

const Car = resolve => {
  require.ensure(['@/views/CarView'], () => {
    resolve(
        require('@/views/CarView'),
    )
  })
}

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/cars',
    component: Cars,
    name: 'Cars',
  },
  {
    path: '/car/:id',
    component: Car,
    children: [
      {
        path: 'full',
        component: CarFull,
        name: 'CarFull',
        beforeEnter: (to, from, next) => {
          console.log('BeforeEnter')
          next()
        }
      }
    ]
  },
  {
    path: '/none',
    redirect: {
      name: 'Cars',
    }
  },
  {
    path: '*',
    component: ErrorCmp,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return  { selector: to.hash }
    }

    return {
      x: 0,
      y: 500
    }
  },
  routes
})

export default router

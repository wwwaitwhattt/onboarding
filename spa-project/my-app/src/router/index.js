import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView'
import Blog from '../views/BlogView'
import Post from '../views/PostView'
import AddPost from '../views/AddPost'
import EditPost from '../views/EditPost'
// import DeletePost from '../views/DeletePost'
import Login from '../views/LoginView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/add',
    name: 'add',
    component: AddPost
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditPost
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import {createRouter,createWebHistory} from 'vue-router'
import middleware from "vue-router-middleware-system"
//////////////
import auth from '../middlewares/auth';
import guest from '../middlewares/guest';
//////////////
const myRouter = function (history) { 
  
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/', 
        children: [
          {path: '',name:'home',component: () => import('./Posts/Index.vue'),meta: {title: 'Blog Posts',middleware: [auth]}},
          {path: 'login',name: 'login',component: () => import('./login/SignIn.vue'),meta: {title: 'Login Page',middleware: [guest]}},
          { path:'/:pathMatch(.*)*', name: '404', component: () => import('./Errors/404.vue'), meta: { title: '404' } },
        ],
      },
    ],
    strict: true, 
  })
  router.beforeEach(middleware())
  return router;
}
export default myRouter
import { createRouter, createWebHistory } from 'vue-router'

import Admin from '@/components/Admin.vue'
import Home from '@/components/Home.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import Login from '@/components/Login.vue'
import Products from '@/components/Products.vue'
import SignUp from '@/components/SignUp.vue'
import SellerView from '@/components/SellerView.vue'
import Profile from '@/components/Profile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',
       name: 'Home',
        component: Home
    },

    { path: '/admin',
     name: 'Admin',
     component: Admin 
     },

    { path: '/product_detail',
       name: 'ProductDetail',
       component: ProductDetail 
    },

    { path: '/login',
      name: 'Login',
       component: Login 
    },

    { path: '/sign_up',
       name: 'SignUp',
      component: SignUp
       },

    { path: '/products',
       name: 'Products',
        component: Products
       },
      { path: '/profile',
          name: 'Profile',
            component: Profile
         },
      { path: '/seller_view',
          name: 'SellerView',
            component: SellerView 
         },

   

  ],
})

export default router


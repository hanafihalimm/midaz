import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Registrasi from '../views/RegistrasiView.vue'
import Verifikasi from '../views/VerifikasiView.vue'
import OTP from '../views/OTP.vue'
import Confirm from '../views/ConfirmView.vue'

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  },
  {
    path: '/register',
    name: 'RegistrasiView',
    component: Registrasi
  },
  {
    path: '/verifikasi',
    name: 'VerifikasiView',
    component: Verifikasi
  },
  {
    path: '/OTP',
    name: 'OTP',
    component: OTP
  },
  {
    path: '/confirm',
    name: 'ConfirmView',
    component: Confirm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

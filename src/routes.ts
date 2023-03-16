import Singin from './views/Singin.vue'
import SingUp from './views/Singup.vue'
import NotFound from './views/NotFound.vue'
import Characters from './views/Characters.vue'
import Profile from './views/Profile.vue'

const auth = ((to, from, next) => {
  if(!localStorage.getItem('token')) next({ name: 'singin' })
  else next()
})

const guest = ((to, from, next) => {
  if(localStorage.getItem('token')) next({ name: 'profile' })
  else next()
})

export const routes = [
  { path: '/', beforeEnter: guest, component: Singin, name : 'singin', meta: { title: 'singin' }},
  { path: '/singup', beforeEnter: guest, component: SingUp, meta: { title: 'singup' }},
  { path: '/characters', beforeEnter: auth, component: Characters, meta: { title: 'characters' }},
  { path: '/profile', beforeEnter: auth, name: 'profile', component: Profile, meta: { title: 'profile' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]


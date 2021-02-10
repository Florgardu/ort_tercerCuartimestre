import { createWebHistory, createRouter } from 'vue-router'
import Formulario from '../components/Formulario.vue'
import ListaTareas from '../components/ListaTareas.vue'
// import Inicio from '../components/Inicio.vue'
import Login from '../components/Login.vue'
import NavBar from '../components/NavBar.vue'



const routes = [
    {path: '/listaTareas', name: 'ListaTareas', component: ListaTareas},
    {path: '/formulario' , name: 'Formulario', component: Formulario},
    {path: '/' , name: 'Login', component: Login},
    {path: '/navBar' , name: 'NavBar', component: NavBar}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
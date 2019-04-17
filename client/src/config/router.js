import Vue from 'vue'
import VueRouter from 'vue-router'

import MostrarFatura from '../components/MostrarFatura.vue'
import EditarFatura from '../components/EditarFatura.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [{
    name: 'Index',
    path: '/',
    component: Index
}, {
    name: 'mostrarFatura',
    path: '/fatura/:id',
    component: MostrarFatura
}, {
    name: 'editarFatura',
    path: '/fatura/editar/:id',
    component: EditarFatura
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
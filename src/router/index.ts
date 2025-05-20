import { createWebHistory, createRouter } from "vue-router";

import Inicio from "@/views/InicioView.vue";
import Cursos from "@/views/CursosView.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'',
            name:'inicio',
            component:Inicio
        },
        {
            path:'/cursos',
            name:'cursos',
            component:Cursos
        },
        {
            path:'/courses',
            redirect:'/cursos'
        },
        /*{
            path:'/categorias',
            name:'categorias',
            component:Categorias
        },
        {
            path:'/cursos/:id',
            name:'curso-agregar-editar',
            component:Curso
        },
        {
            path:'/categorias/:categoriaId',
            name:'categoria-agregar-editar',
            component:Categoria,
            props:true
        },
        {
            path:'/404',
            name:'notfound',
            component:NotFound
        },*/
        {
            path:'/:catchAll(.*)',
            redirect:'/404'
        }
    ]

});

export default router;
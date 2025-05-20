<script setup lang="ts">
import { useRouter } from 'vue-router';
//import Curso from './CursoView.vue';

const router = useRouter();

const regresar = () => router.push('/');

const cursoId = 1;

</script>

<template>
    <h1>Cursos</h1>
    <button class="btn btn-secondary" @click="regresar">Regresar</button>
    <hr>
    <RouterLink class="btn btn-primary" :to="{ name: 'curso-agregar-editar', params: {id: cursoId}}">
        Acceder a curso con id: {{ cursoId }}
    </RouterLink>
</template>
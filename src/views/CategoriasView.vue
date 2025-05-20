<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const regresar = () => router.push({name: 'inicio'});
</script>
<template>
    <h1>Categorías</h1>
    <buttn class="btn btn-warning" @click="regresar">Regresar</buttn>
    <hr />
    <RouterLink class="btn btn-primary" :to="{ name:'categoria-agregar-editar',params:{categoriaId:123}}">
        Acceder a curso con id: 123
    </RouterLink> 
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const regresar = () => router.push({name: 'inicio'});
</script>
<template>
    <h1>Categorías</h1>
    <buttn class="btn btn-warning" @click="regresar">Regresar</buttn>
</template>
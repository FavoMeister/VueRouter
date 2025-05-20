<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const regresar = () => router.push('/');

</script>

<template>
    <h1>Cursos</h1>
    <button class="btn btn-secondary" @click="regresar">Regresar</button>
</template>
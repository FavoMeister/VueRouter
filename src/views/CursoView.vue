<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const { id } = route.params;
</script>
<template>
    <h1>Curso Agregar Editar</h1>
    <h1>
        Id: {{ id }}
    </h1>
</template>
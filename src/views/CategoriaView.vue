<script setup lang="ts">
defineProps<{
    categoriaId:number
}>();
</script>
<template>
    <div>
        <h1>Agregar Editar Categoría</h1>
        <h2>CategoriaId: {{ categoriaId }}</h2>
    </div>

</template>
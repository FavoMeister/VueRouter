<template>
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/" >Cursos</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name:'inicio'}" >Inicio</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/cursos" >Cursos</RouterLink>
                </li>   
                <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name:'categorias'}" >Categorías</RouterLink>
                </li>       
                <!-- <li class="nav-item">
                    <RouterLink class="nav-link" to="/courses" >Courses</RouterLink>
                </li> -->
                </ul>
            </div>
        </div>
    </nav>
</template>
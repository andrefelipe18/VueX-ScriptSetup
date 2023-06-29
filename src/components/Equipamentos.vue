<script setup lang="ts">

</script>

<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-bag me-2"></i>Equipamentos</h5>
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'equipamentos', params: { tipo: 'carros' } }">Carros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'equipamentos', params: { tipo: 'telefones' } }">Telefones</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'equipamentos', params: { tipo: 'kit-de-reanimacao' } }">Kits de Reanimação</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span><router-view name="equipamentos"/></span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
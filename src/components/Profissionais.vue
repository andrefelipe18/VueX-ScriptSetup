<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const totalEnfermeiros = computed(() => useStore().getters.totalEnfermeiros);
const totalSocorristas = computed(() => useStore().getters.totalSocorristas);

</script>

<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-file-person me-2"></i>Profissionais</h5>
                <ul class="nav nav-tabs">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'enfermeiros' } }">
                        Enfermeiros <span class="badge bg-secondary">{{ totalEnfermeiros }}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'socorristas' } }">
                        Socorristas <span class="badge bg-secondary">{{ totalSocorristas }}</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'profissionais', params: { tipo: 'medicos' } }">Médicos</router-link>
                </li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <span><router-view name="profissionais"/></span>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style> 
<script setup lang="ts">
import {  computed, onMounted } from 'vue'; 
import { ConfiguracaoEquipe, Equipamentos, Equipes, Profissionais } from '@/components/'
import { useStore } from 'vuex';

const store = useStore();
const { titulo } = store.state

onMounted(() => {
   store.dispatch('fetchProfissionais'); // chamada da action  

   store.dispatch('fetchEquipamentos');
})
</script>

<template>
    <div>
      
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">{{ titulo }}</a>
        </div>
      </nav>
  
      <div class="container">
  
        <div class="row mt-5">
          <div class="col-6 p">
            <profissionais />
          </div>
  
          <div class="col-6">
            <equipamentos />
          </div>
        </div>
  
        <div class="row mt-5 mb-5 bg-light p-2">
          <div class="col">
            <configuracao-equipe />
          </div>
        </div>
  
        <div class="row mt-5 mb-5">
          <div class="col">
            <equipes />
          </div>
        </div>
      </div>
    </div>
  </template>
  
<style scoped>

</style>
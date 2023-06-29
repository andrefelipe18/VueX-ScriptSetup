<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
ConfiguracaoEquipe
const equipe = computed(() => store.state.equipe); 

const imgAmbulancia = computed(() => {
  //Se um carro for selecionado, retorna a imagem simples.png, porem se for selecionado um carro com kit de reanimação, retorna a imagem com uti.png
  return equipe.value.veiculo ? equipe.value.kitDeReanimacao ? 'uti.png' : 'simples.png' : 'indefinida.png'
})

const montarEquipe = () => {
  store.dispatch('montarEquipe', equipe.value);
}
</script>

<template>
    <div>
      <div class="row">
        <div class="col">
          <h5><i class="bi-boxes me-2"></i>Configuração da equipe</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-8">
          <p>Enfermeiro: {{ equipe.enfermeiro }}</p>
          <p>Socorrista: {{ equipe.socorrista }}</p>
          <p>Médico: {{ equipe.medico }}</p>
          <p>Carro: {{ equipe.veiculo }}</p>
          <p>Telefone: {{ equipe.telefone }}</p>
          <p>Kit de reanimação: {{ equipe.kitDeReanimacao }}</p>
        </div>
        <div class="col-4 text-center">
          <div class="row">
            <div class="col">
              <img class="img-fluid" :src="require(`@/assets/ambulancias/${imgAmbulancia}`)">
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <button type="button" class="btn btn-primary" @click="montarEquipe()">Montar equipe</button>
            </div>
          </div>              
        </div>
      </div>
    </div>
  </template>

<style scoped>

</style>
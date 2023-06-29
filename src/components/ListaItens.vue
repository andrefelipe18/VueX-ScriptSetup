<script setup lang="ts">
import { computed, ref } from 'vue';
import { Item } from '@/components/'
import { useStore } from 'vuex';

const props = defineProps({
    tipo: String,
});

const store = useStore();

/*
*
* Toda essa parte abaixo é responsavel por pegar os dados do state do vuex
* e passar para o componente Item.vue com base no tipo de item que recebido por prop
*/

//Vindo de profissionais
const enfermeiros = computed(() => store.state.enfermeiros);
const medicos = computed(() => store.state.medicos);

//Vindo de equipamentos
const carros = computed(() => store.state.equipamentos.carros);
const telefones = computed(() => store.state.equipamentos.telefones);
const kitsDeReanimacao = computed(() => store.state.equipamentos.kitsDeReanimacao);

//Vindo de equipes
const equipesMontadas = computed(() => store.state.equipesMontadas);

//Filtra os socorristas por turno no getter do state
const socorristas = computed(() => {
    if (turno.value) {
        return store.getters.socorristaPorTurno(turno.value);
    }
    return store.state.socorristas;
});

const itens = computed(() => { 
    switch (props.tipo) {
        case 'enfermeiros':
            return enfermeiros.value;
        case 'socorristas':
            return socorristas.value;
        case 'medicos':
            return medicos.value;
        case 'carros':
            return carros.value;
        case 'telefones':
            return telefones.value;
        case 'kit-de-reanimacao':
            return kitsDeReanimacao.value;
        case 'equipes-montadas':
            return equipesMontadas.value;
        default:
            return [];
    }
});

const turno = ref<string>('');

const totalSocorristaPorTurno = computed(() => {
    if (turno.value) {
        return store.getters.totalSocorristaPorTurno(turno.value);
    }
    return store.getters.totalSocorristas;
});
</script>

<template>
    <div>
        <div class="" v-if="tipo == 'socorristas'">
            <select name="" id="" class="form-control form-control-sm" v-model="turno">
                <option value="">Todos</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
            </select>
        </div>
        <Item v-for="(item, index) in itens" :key="index" :itemProp="item" :tipoProp="tipo"/>
        <div class="" v-if="tipo == 'socorristas'">
            Total socorrista por turno: {{ totalSocorristaPorTurno }}
        </div>
    </div>
</template>

<style scoped>

</style>

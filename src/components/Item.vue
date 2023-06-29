<script setup lang="ts">
import { useStore } from 'vuex';

const props = defineProps({
    itemProp: {
        type: Object,
        required: true,
    },
    tipoProp: String,
});

const store = useStore();

const adicionarItemEquipe = () => {
    let item = {
        tipo: props.tipoProp,
        item: props.itemProp,
    }    

    store.commit('setItemEquipe', item);
}
</script>

<template>
    <div class="row">
        <div class="col-1" v-if="itemProp.id" v-text="itemProp.id"></div> <!-- Condiçao para todos os itens -->
        <div class="col-2" v-if="itemProp.nome" v-text="itemProp.nome"></div> <!-- Condiçao para todos os profissionais -->
        <div class="col-2" v-if="itemProp.escala" v-text="itemProp.escala"></div> <!-- Condiçao para medico e enfermeiro -->
        <div class="col-2" v-if="itemProp.turno" v-text="itemProp.turno"></div> <!-- Condiçao para socorrista -->
        <div class="col-2" v-if="itemProp.placa" v-text="itemProp.placa"></div> <!-- Condiçao para carros -->
        <div class="col-4" v-if="itemProp.telefone" v-text="itemProp.telefone"></div> <!-- Condiçao para telefone -->
        <div class="col-2" v-if="itemProp.kit" v-text="itemProp.kit"></div> <!-- Condiçao para kit de reanimaçao -->
        <div class="col-1">
            <button class="btn btn-sm btn-primary" @click="adicionarItemEquipe()">Selecionar</button>
        </div>

        <!-- Exibindo as equipes -->
        <div class="col-2" v-if="itemProp.enfermeiro" v-text="itemProp.enfermeiro"></div>
    </div>
</template>
<style scoped>

</style>
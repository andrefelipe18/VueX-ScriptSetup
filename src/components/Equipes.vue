<script setup lang="ts">
import { ListaItens } from '@/components';

</script>

<template>
    <div>
        <div class="row">
            <div class="col">
                <h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <ListaItens tipo="equipes-montadas" />
            </div>
        </div>
    </div>
</template>

<style scoped>

</style> 
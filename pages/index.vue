<template>

    <PesquisarEnteForm />
</template>

<script lang="ts">
import EnteTable from '../components/tables/EnteTable.vue';
import PesquisarEnteForm from '../components/forms/PesquisarEnteForm.vue';
    export default defineComponent({
        name: 'index',
        components: {
            PesquisarEnteForm,
            EnteTable
        },
        data() {
            return {
            }
        },
    })


    
    
</script>

<style>
</style>

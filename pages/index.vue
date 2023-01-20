<template>
    <PesquisarEnteForm />
    <div v-if='users.length > 0'>
        <EnteTable users='users'/>
    </div>
</template>

<script lang="ts">
    import { makeServer } from '../server/server';
    import EnteTable from '../components/tables/EnteTable.vue';
    import PesquisarEnteForm from '../components/forms/PesquisarEnteForm.vue';
    import UserModel from '../src/domain/entities/UserModel';
    
    export default defineComponent({
        name: 'index',
        components: {
            PesquisarEnteForm,
            EnteTable
        },
        created() {
            this.getUsers();
            makeServer();
        },
        data() {
            return {
                users: [],
            }
        },
        methods: {
            getUsers() {
                const result = fetch('/api/users');
                result.then((response) => {
                    response.json().then((data) => {
                        this.users = data;
                    });
                });
            }
        }
    })
</script>

<style>
</style>

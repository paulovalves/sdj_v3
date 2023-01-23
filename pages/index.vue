<template>
    <PesquisarEnteForm :searchEnte='searchEnte'/>
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
        },
        data() {
            return {
                name: '',
                count: 0,
                users: [],
                filteredUsers: [],
            }
        },
        methods: {
            getUsers() {
                this.users = [
                    {
                        id: 1,
                        name: 'John Doe',
                        age: 25,
                    },
                    {
                        id: 2,
                        name: 'Jane Doe',
                        age: 22,
                    },
                ];
            },
            searchEnte() {
                    console.log(++this.count);
                
            }
        }
    })
</script>

<style>
</style>

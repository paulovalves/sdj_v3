<template>
    <PesquisarEnteForm />
    <div v-if='users.length > 0'>
        <EnteTable users='users'/>
    </div>
</template>

<script lang="ts">
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
                users: [] as UserModel[],
            }
        },
        methods: {
            getUsers() {
                this.users.push(
                    {id: 1, name: 'john', age: 20},
                    {id: 1, name: 'jane', age: 20},
                );
                console.log(this.users);
            }
        }
    })


    
    
</script>

<style>
</style>

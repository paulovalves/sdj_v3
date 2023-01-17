<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                </tr>
            </thead>
                <tbody>
                    <tr v-for="user in users">
                        <td>{{user.id}}</td>
                        <td>{{user.name}}</td>
                        <td>{{user.age}}</td>
                    </tr>
                </tbody>
        </table>
    </div>
</template>

<script lang="ts">
    export default defineComponent({
        props: {
            msg: String
        },
        created() {
            this.getUsers();
        },
        data() {
            return {
                users: [
                    {id: 1, name: 'John', age: 20},
                    {id: 2, name: 'Jane', age: 21},
                    {id: 3, name: 'Jack', age: 22},
                ]
            }
        },
        methods: {
            getUsers() {
                console.log('getUsers');
            }
        }
    })


    
    
</script>

<style>
</style>

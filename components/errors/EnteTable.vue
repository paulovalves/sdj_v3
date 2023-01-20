<template>
  <v-container>
    <v-table>
      <thead>
         <tr>
           <th>id</th>
           <th>name</th>
           <th>age</th>
          </tr>
      </thead>
      <tbody v-if="users.length > 0">
        <tr v-for="user in users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.age}}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr >
          <td center>nenhum registro foi encontrado.</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'EnteTable',
        created() {
            this.getusers();
        },
        data() {
            return {
                users: [
                  {id: 1, name: 'john', age: 20},
                  {id: 1, name: 'jane', age: 20},
                ]
            }
        },
        methods: {
            getusers() {
              console.log('getusers');
            }

        }
    })


    
    
</script>

<style>
</style>

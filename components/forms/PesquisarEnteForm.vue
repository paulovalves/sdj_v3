<template>
    <v-row justify='space-between' >
      <v-col cols='12' sm='4'>
        <v-form ref='form'>
          <v-text-field
            v-model='nome'
            label='Nome do Ente:'            
            v-on:keyup='searchEnte'
          ></v-text-field>
        </v-form>
      </v-col>
      
      <v-col cols='12' sm='4'>
        <v-form ref='form'>
          <v-text-field
            v-model='cnpj'
            label='CNPJ do Ente:'
          ></v-text-field>
        </v-form>
      </v-col>


      <v-col
        cols='12'
        sm='4'
      >
         <v-row>
            <v-btn class='btn-custom' variant='tonal' p-10>PESQUISAR</v-btn>
        
         </v-row>
         <v-row>
           <v-btn class='btn-custom' variant='tonal' p-10>SALVAR</v-btn>
        </v-row>
      </v-col>
    </v-row>
    <EnteTable users='users'/>
</template>

<script lang='ts'>
import EnteTable from '../tables/EnteTable.vue';
    export default defineComponent({
        name: 'PesquisarEnteForm',
        components: {
            EnteTable,
        },
        props: {
            searchEnte: {
                type: Function,
                required: true
            }
        },
        created() {
            this.$emit('searchEnte');
        },
        data() {
            return {
                nome: '',
                cnpj: '',
                users: [
                  {id: 1, name: 'John Doe', age: 25},
                  {id: 2, name: 'Jane Doe', age: 24},
                ],
            }
        },
        computed: {
            filterTable() {
               console.log(`${nome.toLowerCase()}`);
                
            }
        }
    })
</script>

<style>
.btn-custom{
    width: 50%;
    margin-bottom: 10px;
    
}
</style>

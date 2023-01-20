<template>
    <v-row justify="space-between" >

          <v-col cols='12' sm="4">
            <v-form ref="form">
              <v-text-field
                v-model="model"
                :counter="max"
                :rules="rules"
                label="Nome do Ente:"
              ></v-text-field>
            </v-form>
          </v-col>
          <v-col cols='12' sm="4">
            <v-form ref="form">
              <v-text-field
                v-model="model"
                :counter="max"
                :rules="rules"
                label="CNPJ do Ente:"
              ></v-text-field>
            </v-form>
          </v-col>


          <v-col
            cols="12"
            sm="4"
          >
          <v-row>
            <v-btn class='btn-custom' variant="tonal" p-10>PESQUISAR</v-btn>
            
          </v-row>
          <v-row>
            <v-btn class='btn-custom' variant="tonal" p-10>SALVAR</v-btn>
          </v-row>
         </v-col>
        </v-row>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'PesquisarEnteForm',
        data() {
            return {
                model: '',
                max: 40,
                rules: [
                  (v: string) => !!v || 'Campo obrigatório',
                  (v: string) => v.length <= 10 || 'Máximo 10 caracteres',
                ],
            }
        },
    })
</script>

<style>
.btn-custom{
    width: 50%;
    margin-bottom: 10px;
    
}
</style>

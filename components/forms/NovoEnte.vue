<<template>
    <v-container>
        <v-row

      justify="space-between"
    >
      <v-col
        cols="12"
        md="4"
      >
        <v-form ref="form">
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="Nome do Ente:"
          ></v-text-field>
        </v-form>
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
        md="6"
      >
        <v-btn variant="tonal">PESQUISAR</v-btn>
        <v-btn variant="tonal">SALVAR</v-btn>
     </v-col>
    </v-row>
    </v-container>
v-container>
</template>

<script lang="ts">
    export default defineComponent({
        name: 'NovoEnteForm',
        data() {
            return {
                model: '',
                max: 10,
                rules: [
                  (v: string) => !!v || 'Campo obrigatório',
                  (v: string) => v.length <= 10 || 'Máximo 10 caracteres',
                ],
            }
        },
    })
</script>

<style>
</style>

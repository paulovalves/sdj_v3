<template>
  <v-layout>
    <v-card>
      <v-navigation-drawer permanent>
            <v-list>
              <v-list-item>
                  <v-list-item-title class="text-h6">
                    SDJ
                </v-list-item-title>
                <v-list-item-subtitle>Serviço de Depósitos Judiciais</v-list-item-subtitle>

              <v-list-item-action>
                <v-icon>mdi-menu-down</v-icon>
              </v-list-item-action>
            </v-list-item>

          <v-divider></v-divider>

          <v-list-item title="Home" value="home" to='/' router exact></v-list-item>

          <v-list-item title="Depósitos Eletrônico" value="deposito" to='/depositos' router exact></v-list-item>

          <v-list-item title="Alvará Eletrônico" value="alvara" to='/alvaras' router exact></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 300px"></v-main>
    </v-card>      
    <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>   
 
    <v-footer :absolute="!fixed" app>
      <span>Versão {{ $config.clientVersion }}</span>
      <v-spacer></v-spacer>
      <span>Tribunal de Justiça do Paraná &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
     
    }
  },

}
</script>
<style scoped>
.v-application {
  background-color: #efeeee;
}
</style>


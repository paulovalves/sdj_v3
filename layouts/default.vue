<template>
    <v-layout>
<v-card>
    
      <v-navigation-drawer
        theme="dark"
        rail
        permanent
      >
      
        <v-list-item
          nav
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list
          density="compact"
          nav
        >
        
          <v-list-item prepend-icon="mdi-view-dashboard" value="dashboard"></v-list-item>

          <v-list-item prepend-icon="mdi-forum" value="messages"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-navigation-drawer permanent>
        <v-list>
            <v-list-item>
                <v-list-item-title class="text-h6">
                  SDJ 
                </v-list-item-title>

        </v-list-item>

      <v-divider></v-divider>

          <v-list-item title="Home" value="home"></v-list-item>

          <v-list-item title="Depósitos Eletronico" value="depositoEletronico"></v-list-item>

          <v-list-item title="Álvara Eletronico" value="alvaraEletronico"></v-list-item>
        </v-list>
      </v-navigation-drawer>

  </v-card>      
   <v-main>
      <v-container>
        <NuxtPage />
      </v-container>
    </v-main>
   
    



    <v-footer
        :absolute="!fixed"
        app
    >
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
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '',

    }
  },

}
</script>
<style scoped>
.v-application {
  background-color: #efeeee;
}
</style>


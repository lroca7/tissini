<template>
  <v-app>
    
    <TsHeader />
    
    <v-main>
        <v-container class="main__container pa-0 ma-0" fluid>
            <router-view></router-view>
        </v-container>
    </v-main>

    <TsFooter />
    
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TsHeader from './components/TsHeader'
import TsFooter from './components/TsFooter'

export default {
  name: 'App',

  components: {
    TsHeader, TsFooter
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  footer {
    background: #ffffff;
    color: #f06292;
  }
</style>
<template>
    <v-app-bar
      app
      class="header"
    >
      <div class="d-flex align-center title">
        Cliente Pruebas
      </div>

      <v-spacer></v-spacer>

    
      <v-icon class="mr-4">mdi-phone</v-icon>
      <v-icon>mdi-exit-to-app</v-icon>
      
    </v-app-bar>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
    .header{
      background: #ffffff;
      color: #f06292;
    }
    .header i {
      color: #f06292;
    }
    .title{
      color: #f06292;
    }
</style>
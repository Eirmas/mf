<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component({
    name: 'App'
  })
  export default class App extends Vue {
  }
</script>

<style>
  .v-application a {
    color: unset !important;
  }
</style>

<template>
  <v-app>
    <!-- Application Header Navigation & Drawer -->
    <!-- <app-header></app-header> -->
    <v-content >
      <v-container fluid>
        <div class="headline text-xs-center" id="contentSec">
          <router-view></router-view>
        </div>
        <!-- Footer Navigation -->
        <footer-nav></footer-nav>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  document.addEventListener('contextmenu', event => event.preventDefault())
export default {
  data () {
    return {
      
    }
  },
  name: 'BaseApp'
}
</script>
<style>
#contentSec{
  padding-top: 15px;
}
</style>

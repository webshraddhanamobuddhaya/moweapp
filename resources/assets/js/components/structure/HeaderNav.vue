<template>
    <div class="app-head">
         <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="click">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="click">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="pink darken-3" dark fixed app id="navBar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{navTitle}}</v-toolbar-title>
    </v-toolbar>
    </div>
</template>

<script>
import store from '../../store/store.js'
export default {
    data(){
        return{
            drawer: null,
        }
    },methods:{
        click(){

        }
    },
    mounted(){
      // store.dispatch("setNavTitle",'Latest Videos');
    },
    computed: {
      navTitle(){
        return store.state.navTitle;
      }
    }
}
</script>
<style>
#navBar{
  padding-top: 15px;
  margin-bottom: 15px;
}
</style>

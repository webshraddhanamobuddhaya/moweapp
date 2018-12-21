<template>
<div>
<vue-plyr>
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/CqnPcJZr1RQ"
      allowfullscreen allowtransparency allow="autoplay">
    </iframe>
  </div>
</vue-plyr>

<v-layout row wrap>
            <v-flex xs12>

<!-- <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube> -->
            </v-flex>
</v-layout>
</div>
</template>

<script>
import store from "../store/store";
export default {
	data(){
		return {
			videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      }
		}
  },
  created(){
    store.dispatch("setNavTitle",'Live Video Streaming');
  },
  methods: {
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
}
</script>

<style>
iframe {
  width: 100%;
 
}
</style>
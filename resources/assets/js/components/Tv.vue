<template>
<div>
  <spiner-basic v-if="loading"></spiner-basic>
<!-- <vue-plyr v-if="!loading">
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/CqnPcJZr1RQ"
      allowfullscreen allowtransparency allow="autoplay">
    </iframe>
  </div>
</vue-plyr> -->

<!-- youtube div element -->

<v-layout row wrap v-if="!loading">
            <v-flex xs12>
              <vue-plyr >
                <div data-plyr-provider="youtube" :data-plyr-embed-id="video_id"></div>
              </vue-plyr>
              <v-card id="add-card">
                    <img src="/images/shraddha_tv.jpg" alt="Vuetify.js" id="shraddha_tv-logo">
                <div >
                </div>
              </v-card>
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
  computed: {
    loading(){
      return store.state.loading;
    },
    video_id(){
      return store.state.liveStreamId;
    }
  },
  created(){
    store.dispatch("setNavTitle",'Live Video Streaming');
    // store.dispatch("getTvLiveStreamingData");
    if(store.state.liveStreamId == undefined){
      store.dispatch("getTvLiveStreamingData");

    }
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
#shraddha_tv-logo{
		max-width: 60%;
	}
#add-card{
  margin-top: 25px;
}
</style>
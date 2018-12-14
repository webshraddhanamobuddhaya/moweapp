<template>
<vue-plyr>
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/CqnPcJZr1RQ"
      allowfullscreen allowtransparency allow="autoplay">
    </iframe>
  </div>
</vue-plyr>
</template>

<script>
import store from "../store/store";
export default {
	data(){
		return {
			
		}
  },
  created(){
    store.dispatch("setNavTitle",'Live Video Streaming');
  }
}
</script>

<style>

</style>
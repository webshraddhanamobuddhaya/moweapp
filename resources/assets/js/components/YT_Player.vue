<template>
    <vue-plyr>
        <div class="plyr__video-embed">
            <iframe
            :src= "video_url"
            allowfullscreen allowtransparency allow="autoplay">
            </iframe>
        </div>
    </vue-plyr>
</template>

<script>
	
export default {
    props:[
        'video_url'
    ],
	data(){
		return {
			
		}
	}
}
</script>

<style>

</style>
<template>
    <div id="single-video">
        
        <div class="plyr__video-embed" id="player">
            <!-- <iframe :src="vLink" allowfullscreen allowtransparency allow="autoplay"></iframe> -->
            <iframe :src="post.video_url" allowfullscreen allowtransparency allow="autoplay" fullscreen></iframe>
        </div>

        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        <div class="headline">{{post.post_title}} </div>
                    </v-card-title>
                    <p class="body-1 body-text">{{post.description}}</p>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>

export default {
	data(){
		return {
            vLink: "https://www.youtube.com/embed/",
			post: [
                

            ]
		}
    },
    computed:{
        },
    created(){
        let post_id = this.$route.params.id;
        let url = '/api/video/'+post_id;
            console.log(url);
        axios.get(url).then((response) => {
            this.post = response.data;
            // console.log(response.data);
        return this.vLink=response.data.video_url;

        });
        // console.log(this.vLink);

    },
    methods: {
        
        

    }
}
</script>

<style>
#youtube-video-player{
    padding-bottom: 25px;
}
.body-text{
    text-align: justify;
    line-height: 1.6;
    padding: 10px;
    margin-bottom: 50px;
}

</style>
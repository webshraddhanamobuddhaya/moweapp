<template>
	<div id="radio">
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<div >
						<img src="/images/lakviru.jpg" alt="Lakviru Radio" id="lakviru-logo">
				</div>

						
					<v-progress-circular
						:rotate="360"
						:size="175"
						:width="25"
						:value="volume_value"
						:color="color"
					>
					<v-btn :color="color" fab large dark @click="mainControll">
							<v-icon>{{button_icon}}</v-icon>
						</v-btn>
					</v-progress-circular>


					<v-flex xs10 offset-xs1>
						<v-slider
							@change="volueChange"
							v-model="volume_value"
							:color="color"
							always-dirty
							min="0"
							max="100"
							>
							<v-icon
								slot="prepend"
								:color="color"
								@click="decrement"
							>
								exposure_neg_1
							</v-icon>
					
							<v-icon
								slot="append"
								:color="color"
								@click="increment"
							>
								plus_one
							</v-icon>
						</v-slider>
					<P class="subheading" id="volumeValue">Volume: {{volume_value}}%</P>
					</v-flex>


			</v-card>
		</v-flex>


	</div>
</template>

<script>
import store from "../store/store";
export default {
	data(){
		return {
			volume_value: 60,
			button_icon: "play_arrow",

			color: "blue-grey lighten-3",
			inactive_color: "blue-grey lighten-3"
		}
	},
	computed: {

		volumeDisplay(){
	
			return Math.round(this.volume_value*100);
		},
		colors () {
			if (this.volume_value < 30) return 'indigo'
			if (this.volume_value < 50) return 'teal'
			if (this.volume_value < 70) return 'green'
			if (this.volume_value < 90) return 'orange'
			return 'red'
		}
	},
	watch:{
		volume_value(value){
			if(this.playing){
				this.colorBaseValue(value)	
			}else{
				this.color = this.inactive_color
			}

		},
		playing(value){

		}
	},
	created(){
		// store.dispatch("setNavTitle",'Radio Live Stream');
		store.dispatch("initRadio");

	},
	mounted(){

		this.colorBaseValue(this.volume_value);
	},

	methods:{
		colorBaseValue(value){
			if(value>90){this.color = "red accent-1"}
				else if(value>70){this.color = "teal"}
				else if(value>50){this.color = "green"}
				else if(value>30){this.color = "orange"}
				else{this.color = "indigo lighten-3"}
		},
		volueChange(){
			// this.$refs.radio.volume = this.volume_value/100;
			store.dispatch("changeRadioVolume",this.volume_value/100);

		},

		clickForPlay(){
			this.button_icon = "pause";
			this.playing = true;
			this.colorBaseValue(this.volume_value);

		},
		clickForPause(){
			this.button_icon = "play_arrow";
			this.playing = false;
			this.color = this.inactive_color;

		},
		mainControll(){
			if (!store.state.radioPlaying) {
				store.dispatch("playRadio");
				this.clickForPlay();
	
			} else {
				store.dispatch("stopRadio");
				this.clickForPause();
			}
		},
		increment () {
			this.volume_value++;
		},
		decrement () {
			this.volume_value--;
		}
	}
}
</script>

<style>
	#lakviru-logo{
		max-width: 60%;
	}
	#volumeValue{

    margin-top: -30px;
    padding-bottom: 25px;
	color: #B0BEC5;
	}
</style>
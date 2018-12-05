<template>
	<div id="radio">
		<audio ref="audioButton" controls id="radio" autoplay v-show="false">
			<source src='http://69.46.24.226:7643/;'>
		</audio>
		
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<div >
						<img src="/images/lakviru.jpg" alt="Vuetify.js" id="lakviru-logo">
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

					<P class="subheading">Volume: {{volume_value}}</P>

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
					</v-flex>


			</v-card>
		</v-flex>


	</div>
</template>

<script>
	
export default {
	data(){
		return {
			volume_value: 60,
			button_icon: "pause",
			au: this.radio2(),
			audio: undefined,
			playing1: true
		}
	},
	computed: {
		volumeDisplay(){
	
			return Math.round(this.volume_value*100);
		},
		color () {
			if (this.volume_value < 30) return 'indigo'
			if (this.volume_value < 50) return 'teal'
			if (this.volume_value < 70) return 'green'
			if (this.volume_value < 90) return 'orange'
			return 'red'
		}
	},

	methods:{
		volueChange(){
			this.$refs.audioButton.volume = this.volume_value/100;
			// console.log(this.$refs.audioButton.volume);
		},
		radio2(){
			return this.$refs.audioButton;
		},
		mainControll(){
			var a = this.$refs.audioButton;
			console.log(this.au);
			if (a.paused) {
				a.play();
				this.button_icon = "pause";
				
			} else {
				a.pause();
				this.button_icon = "play_arrow"
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
		/* width: 100%; */
		max-width: 60%;
	}
</style>
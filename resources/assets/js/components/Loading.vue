<template>
    <v-content>
        <v-container fluid>
            <v-layout
                justify-center
                align-center
                id="spinerHeight"
            >
            <half-circle-spinner
                :animation-duration="1500"
                :size="45"
                :color="baseColor"
            />
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import { HalfCircleSpinner } from 'epic-spinners';
import store from "../store/store"; 
export default {
    components: {
      HalfCircleSpinner
    },
    computed:{
        baseColor(){
            return store.state.baseColor;
        }
    }
}
</script>
<style>
#spinerHeight{
    height: 80vw;
}
</style>

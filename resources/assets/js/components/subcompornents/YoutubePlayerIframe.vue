<template>
    <div class="container">
    <iframe :src="video_url" frameborder="0" allowfullscreen class="video"></iframe>
    </div>
</template>
<script>
export default {
    props: ['video_url']
}
</script>
<style>
.container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
}
.video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>


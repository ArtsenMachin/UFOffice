<template>
<div class="container mt-5">
    <div id="game">
        <canvas class="canvas" id="canvas" ref="canvas"></canvas>
    </div>
</div>
</template>

<script>
import BgImage from "@/assets/img/canvasback.png";
export default {
    mounted(){
        this.startGame();
    },
    methods:{
        startGame(){
            let cvn = this.$refs.canvas;
            let ctx = cvn.getContext("2d");  
            let bg = new Image();
            bg.src = BgImage;
            bg.onload = function() {
                ctx.drawImage(bg, 0, 0, cvn.width, cvn.height);
            };
        }
    }
}
</script>

<style scoped>
    #game{
        width: 100%;
    }
    .container{
        border-radius: 15px;
    }
    .canvas{
        width: 100%;
        height: 600px;
        border-radius: 10px;
    }
</style>
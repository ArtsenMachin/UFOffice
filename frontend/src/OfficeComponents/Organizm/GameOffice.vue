<template>
    <v-container>
        <div id="game">
            <canvas class="canvas" id="canvas" ref="canvas"></canvas>
        </div>
    </v-container>
</template>

<script>
/* eslint-disable import/no-unresolved */
import BgImage from '@/assets/img/Canvas_back.png';
// import EmptyImg from "@/assets/img/Work_place_empty.png";
import WomanImg from '@/assets/img/Work_place_woman.png';
import ManImg from '@/assets/img/Work_place_man.png';
import DeskImg from '@/assets/img/Deskboard.png';

export default {
  mounted() {
    this.startGame();
    this.MenuLink();
  },
  methods: {
    startGame() {
      const cvn = this.$refs.canvas;
      const ctx = cvn.getContext('2d');
      const bg = new Image();
      bg.src = BgImage;
      /* let Emp = new Image();
            Emp.src = EmptyImg; */
      const WoI = new Image();
      WoI.src = WomanImg;
      const MaI = new Image();
      MaI.src = ManImg;
      const DeI = new Image();
      DeI.src = DeskImg;
      cvn.width = 1300;
      cvn.height = 575;
      // eslint-disable-next-line func-names
      DeI.onload = function () {
        ctx.drawImage(bg, 0, 0, cvn.width, cvn.height);
        ctx.drawImage(MaI, 475, 175, 156, 145);
        ctx.drawImage(WoI, 325, 250, 156, 145);
        ctx.drawImage(MaI, 625, 260, 156, 145);
        ctx.drawImage(MaI, 475, 340, 156, 145);
        ctx.drawImage(MaI, 775, 350, 156, 145);
        ctx.drawImage(DeI, 588, 25, 128, 150);
      };
      // eslint-disable-next-line no-use-before-define
      cvn.addEventListener('click', handlerClickCanvas);
      function handlerClickCanvas(e) {
        if (e.offsetX < 631 && e.offsetX > 475 && e.offsetY > 175 && e.offsetY < 320) {
          window.location.replace('/team');
        } else if (e.offsetX < 481 && e.offsetX > 325 && e.offsetY > 250 && e.offsetY < 395) {
          window.location.replace('/team');
        } else if (e.offsetX < 781 && e.offsetX > 625 && e.offsetY > 260 && e.offsetY < 405) {
          window.location.replace('/team');
        } else if (e.offsetX < 631 && e.offsetX > 475 && e.offsetY > 340 && e.offsetY < 485) {
          window.location.replace('/team');
        } else if (e.offsetX < 716 && e.offsetX > 588 && e.offsetY > 25 && e.offsetY < 175) {
          window.location.replace('/task');
        } else if (e.offsetX < 931 && e.offsetX > 775 && e.offsetY > 350 && e.offsetY < 495) {
          window.location.replace('/team');
        } else {
          console.log('Тута не жми!');
        }
      }
      cvn.onmousemove = function handlerMouseOverCanvas(e) {
        if (e.offsetX < 631 && e.offsetX > 475 && e.offsetY > 175 && e.offsetY < 320) {
          document.getElementById('canvas').classList.add('cursor');
        } else if (e.offsetX < 481 && e.offsetX > 325 && e.offsetY > 250 && e.offsetY < 395) {
          document.getElementById('canvas').classList.add('cursor');
        } else if (e.offsetX < 781 && e.offsetX > 625 && e.offsetY > 260 && e.offsetY < 405) {
          document.getElementById('canvas').classList.add('cursor');
        } else if (e.offsetX < 631 && e.offsetX > 475 && e.offsetY > 340 && e.offsetY < 485) {
          document.getElementById('canvas').classList.add('cursor');
        } else if (e.offsetX < 716 && e.offsetX > 588 && e.offsetY > 25 && e.offsetY < 175) {
          document.getElementById('canvas').classList.add('cursor');
        } else if (e.offsetX < 931 && e.offsetX > 775 && e.offsetY > 350 && e.offsetY < 495) {
          document.getElementById('canvas').classList.add('cursor');
        } else {
          document.getElementById('canvas').classList.remove('cursor');
        }
      };
    },
    MenuLink() {
      document.getElementById('link-card-2').classList.remove('active');
      document.getElementById('link-card-3').classList.remove('active');
      document.getElementById('link-card-1').classList.add('active');
    },

  },
};
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
        height: 575px;
        border-radius: 10px;
    }
    .cursor{
        cursor: pointer;
    }
</style>

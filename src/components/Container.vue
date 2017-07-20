<template>
  <div class="container">
    <div class="canvas">
      <canvas id="light" width="200" height="350"></canvas>
    </div>
    <div class="content">
      <div class="header">
        <Menu class="menu" />
      </div>
      <div class="route">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu';

export default {
  mounted() {
    this.drawLight();
  },

  components: {
    Menu
  },

  data() {
    return {

    }
  },
  methods: {
    drawLight() {
      const ctx = document.getElementById('light').getContext('2d');
      ctx.beginPath();
      ctx.fillStyle = '#168856';
      ctx.fillRect(52,0,5,250);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = '#263749';
      ctx.fillRect(50,250,9,10);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = '#263749';
      ctx.arc(53, 300, 40, 0, Math.PI, 1);
      ctx.fill();
      ctx.closePath();

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 300);
      ctx.fillStyle = '#263749';
      ctx.scale(1, .25);
      ctx.arc(0, 0, 40, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.restore();
      ctx.fill();


      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 299);
      ctx.scale(1, .25);
      ctx.fillStyle = '#e9f4ff';
      ctx.arc(0, 0, 38, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();

      const rgd = ctx.createLinearGradient(0, -120, 0, 0);
      rgd.addColorStop(0, '#ffff37');
      rgd.addColorStop(0.3, '#ffff78');
      rgd.addColorStop(0.5, '#ffff5d');
      rgd.addColorStop(1, '#ffffe1');

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 340);
      ctx.fillStyle = rgd;
      ctx.scale(.5, 1);
      ctx.arc(0, 0, 50, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 296);
      ctx.fillStyle = '#fff';
      ctx.scale(1, .45);
      ctx.arc(0, 0, 10, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 950px;
    padding: 30px 40px;
    margin: 30px auto;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
  }
  .canvas {
    float: left;
    display: inline-block;
    margin-top: -31px;
  }
  .content {
    width: 670px;
    float: right;
  }
  .header {
    position: relative;
    height: 30px;
  }
  .menu {
    position: absolute;
    right: -40px;
  }

</style>

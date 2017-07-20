<template lang="html">
  <div class="container">
    <div class="canvas">
      <canvas id="light" width="200" height="465"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawLight();
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
      ctx.fillRect(52,0,5,350);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = '#263749';
      ctx.fillRect(50,350,9,10);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = '#263749';
      ctx.arc(53, 410, 50, 0, Math.PI, 1);
      ctx.fill();
      ctx.closePath();

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 410);
      ctx.fillStyle = '#263749';
      ctx.scale(1, .25);
      ctx.arc(0, 0, 50, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.restore();
      ctx.fill();


      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 409);
      ctx.scale(1, .25);
      ctx.fillStyle = '#e9f4ff';
      ctx.arc(0, 0, 48, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();

      const rgd = ctx.createLinearGradient(0, -120, 0, 0);
      rgd.addColorStop(0, '#ffff37');
      rgd.addColorStop(0.3, '#ffff78');
      rgd.addColorStop(0.5, '#ffff5d');
      rgd.addColorStop(1, '#ffffe1');

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 457);
      ctx.fillStyle = rgd;
      ctx.scale(.5, 1);
      ctx.arc(0, 0, 60, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.translate(53, 404);
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
    width: 1100px;
    padding: 30px 40px;
    margin: 30px auto;
    background: #fff;
    border-radius: 4px;
  }
  .canvas {
    margin-top: -31px;
  }
</style>

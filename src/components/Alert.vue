<template>
  <div>
    <div class="box" v-bind:class="{ 'box-out': hide }">
      <div>
        敢问大侠如何称呼？
      </div>
      <input type="text" class="input" v-model="message" />
      <button type="button" name="button" class="button" @click="handleSubmit">哦了</button>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      hide: false,
      message: "贱盘侠"
    }
  },

  methods: {
    handleSubmit() {
      const data = this.message;
      this.hide = true;
      localStorage.setItem('name', data);
      setTimeout(() => {
        this.$emit("hideDialog", data);
      }, 500);
    }
  }

}
</script>

<style lang="css" scoped>
  .mask{
    width: 100%;
    height: 100%;
    background: #263749;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .box {
    width: 470px;
    height: 220px;
    background: #fff;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -275px;
    z-index: 2;
    padding: 40px 40px;
    color: #333;
    font-size: 24px;
    text-align: center;
  }
  .input {
    width: 100%;
    height: 50px;
    outline:none;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 30px 0;
    font-size: 16px;
    text-align: center;
  }
  .button {
    width: 100%;
    height: 50px;
    border: 0;
    outline:none;
    border-radius: 5px;
    background: #41b883;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
  }

  .box-out {
    animation: remove .5s ease;
  }

  @keyframes remove {
    from {
      opacity: 1;
      transform: scale(1, 1);
    }

    to {
      opacity: 0;
      transform: scale(0, 0);
    }
  }
</style>

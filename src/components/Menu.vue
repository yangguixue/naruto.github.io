<template>
  <div class="menu">
    <ul class="list">
      <router-link to="/" class="menuName"><li>主页</li></router-link>
      <router-link to="/experience" class="menuName"><li>经验</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
  .menu {
    width: 300px;
    height: 30px;
    padding-left: 10px;
    line-height: 30px;
    background: #41b883;
  }
  .list li {
    padding: 0 20px;
    float: left;
    list-style: none;
  }
  .list li:hover {
    background: #57d99f;
    transition: all .2s ease;
  }
  .menuName {
    width: auto;
    display: inline-block;
    text-decoration: none;
    color: #fff;
  }
</style>

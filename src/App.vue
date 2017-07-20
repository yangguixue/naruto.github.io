<template>
  <div id="app">
    <h1 class="title">
        hello {{ name }}!
    </h1>
    <Alert v-if="hide" v-on:hideDialog="hideDialog" />
    <Container />
  </div>
</template>

<script>
import Alert from './components/Alert';
import Container from './components/Container';

export default {
  data () {
    return {
      name: localStorage.getItem('name'),
      hide: !localStorage.getItem('name'),
    }
  },

  components: {
    Alert,
    Container,
  },

  methods: {
    hideDialog(data) {
      this.hide = false;
      this.name = data;
    }
  }
}
</script>

<style>
  body {
    color: #41b883;
    background: #263749;
  }
  ul, li, p {
    margin: 0;
    padding: 0;
  }
  .title {
    font-size: 36px;
    text-align: center;
  }
</style>

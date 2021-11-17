<template>
  <div id="app">
     <h-switch
      v-model="lightSwitch">开关:</h-switch>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      lightSwitch: false,
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

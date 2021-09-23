<template>
  <div id="app">
    <img src="./assets/qima_lockup_email.png">
    <AnnulReport/>
  </div>
</template>

<script>
import AnnulReport from './components/annualReport'

export default {
  name: 'App',
  components: {
    AnnulReport
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
  margin-top: 150px;
}
</style>

<template>
  <div id="backGround">
    <div id="app">
      <AnnulReport />
      <!-- <Index/> -->
    </div>
  </div>
</template>

<script>
import AnnulReport from "./components/annualReport";
import Index from './components/index'

export default {
  name: "App",
  components: {
    AnnulReport,
    Index
  },
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("../static/img/MicrosoftTeams-image.png");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 2200px;
}
</style>

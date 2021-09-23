<template>
  <div class="hello">
    <h1>
      {{ msg }} <span style="color: red">{{ team }}</span>
    </h1>
    <ul>
      <li>
        <!-- <router-link to="/annualReport">seeShare</router-link> -->
        <button id="button" @click="seeShare">seeShare</button>
        <a
          href="https://asiainspection.atlassian.net/wiki/spaces/IT/pages/2407006579/Hackathon+-+Gryffindor+-+Group+Annual+Report"
          target="_blank"
        >
          Gryffindor
        </a>
      </li>
      <li>
        <a href="https://sso.qima.com/inspection/" target="_blank"> QIMA </a>
      </li>
      <li>
        <a
          href="https://asiainspection.atlassian.net/secure/RapidBoard.jspa?projectKey=SP&rapidView=116"
          target="_blank"
        >
          Ticket
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to",
      team: "Gryffindor",
    };
  },
  methods: {
    seeShare () {
      let routeUrl = this.$router.resolve({
        path: "/annualReport",
      });
      //let routeUrl = this.$router.resolve(`/share/${96}`)
      window.open(routeUrl.href, "_self");
    },
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div class="left">
      <Polar/>
      <LineD/>
      <Radar/>
    </div>
    <div class="center">
      <div class="graph">
        <TMap />
        <TMap />
        <TMap />
        <TMap />
      </div>
    </div>
    <div class="right">
      <One/>
    </div>
  </div>
</template>

<script>
import Polar from "./components/graph/Polar.vue";
import LineD from "./components/graph/LineD.vue";
import One from "./components/news/One.vue";
import Radar from "./components/graph/Radar.vue";
import TMap from "./components/graph/TMap.vue"

export default {
  name: "app",
  components: {
    Polar,
    LineD,
    One,
    Radar,
    TMap
  }
};
</script>

<style>
body {
  background-color: #2c3e50;
}
#app {
  display: flex;
  flex-direction: row;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.left {
  width: 22%;
}

.center {
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  /* flex-direction: row; */
  width: 50%;
  align-items: center;
  /* align-content: center; */
  justify-content: center;
  /* height: 50%; */
  margin: 0 -5px;
}

.graph {
  display: flex;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}
.right {
  float: right;
  width: 22%;
}
</style>

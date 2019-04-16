<template>
  <div id="app">
    <div class="left">
      <Polar/>
      <LineD/>
      <Radar/>
    </div>
    <div class="center">
    <TMap />
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
  width: 50%;
}
.right {
  float: right;
  width: 22%;
}
</style>

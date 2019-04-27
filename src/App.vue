<template>
  <div id="app">
    <div class="left">
      <Polar />
      <LineD />
      <Radar />
    </div>
    <div class="center">
      <div class="graph">
        <TMap />
        <!-- <TMap /> -->
        <!-- <TMap /> -->
        <!-- <TMap /> -->
      </div>
    </div>
    <div class="right">
      <One />
    </div>
    <div
      class="mask-fade"
      style="display:none"
      v-on:click="normalize"
    ></div>
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
  },
  mounted() {
    this.autoResize()
    window.onresize = this.autoResize
    
  },
  methods: {
    autoResize: function() {
       let winHeight = 0
      if (window.innerHeight) {
        winHeight = window.innerHeight
      }
      else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.documentElement.clientHeight
      }
      document.getElementById("app").style.height = winHeight + "px"
    },

    normalize: function() {
      let t = document.querySelector(".max")
      t.className = "echarts map"
      document.querySelector(".mask-fade").style.display="none"
    }
  }
};
</script>

<style>
body {
  background-color: rgba(37, 37, 48);
}

.echarts {
  /* min-width: 200px; */
  /* height: 33%; */
  width: 100%;
  min-height: 200px;
  height: 80%;
  /* max-height: 30%; */
}

#app {
  display: flex;
  flex-direction: row;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(236, 255, 255, 1);
}

.left {
  width: 22%;
  max-height: 100%;
  overflow: auto;
}

.left > div {
  height: 33%;
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
  height: 100%;
  overflow: hidden;
}

.mask-fade {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  opacity: 0.8;
  background-color: gray;
}
</style>

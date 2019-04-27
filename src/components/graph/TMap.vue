<template>
  <div
    id="test"
    v-on:click="winResize"
  >
    <v-chart
      class="map"
      :options="map"
      autoresize
    />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/map'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/scatter'
import 'echarts/lib/chart/effectScatter'
import map from './data/map'
import chinaMap from './china.json'

ECharts.registerMap('china', chinaMap)

export default {
    name: 'TMap',
    components: {
        "v-chart": ECharts
    },
    data() {
        return {
            map
        }
    },
    methods: {
        winResize: function() {
            let t = document.querySelector("#test > .echarts")
            t.className = "max"
            let mask = document.querySelector(".mask-fade")
            mask.style.display = "block"
        }
    }
    
}
</script>

<style>
#test {
  min-width: 300px;
  width: 50%;
  height: 50%;
}

.map {
  width: 100%;
  height: 100%;
  border: 2px solid gray;
}

.max {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  width: 90% !important;
  height: 90% !important;
}
</style>

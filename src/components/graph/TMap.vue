<template>
    <div>
        <v-chart class="map" :options="map"
        autoresize/>
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
    
}
</script>

<style>
.map {
    width: 100%;

}
</style>

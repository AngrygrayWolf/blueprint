<template>
    <div>
        <div class="title">
                <div class="icon_vertical"></div>
                标题一
        </div>
        <v-chart :options="polar"/>
    </div>
</template>


<style>
.echarts {
    width: 100%;
}
</style>

<script src=""></script>
<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'

export default {
    name: 'Polar',
    components: {
        'v-chart': ECharts
    },
    data () {
        let data = []

        for (let i = 0; i <= 360; i++) {
            let t = i / 180 * Math.PI
            let r = Math.sin(2 * t) * Math.cos(2 * t)
            data.push([r, i])
    }

    return {
        polar: {
        title: {
            text: '极坐标双数值轴'
        },
        legend: {
            data: ['line']
        },
        polar: {
            center: ['50%', '54%']
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
            min: 0
        },
        textStyle:{
            color: 'rgba(236,255,255,1)',
        },
        series: [
            {
                coordinateSystem: 'polar',
                name: 'line',
                type: 'line',
                showSymbol: false,
                data: data
            }
        ],
        animationDuration: 2000
            }
        }

    }
}
</script>


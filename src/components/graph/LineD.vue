<template>
    <div>
        <div class="title">
            <div class="icon_vertical"></div>
            标题一
        </div>
        <v-chart :options="bar"
                ref="bar"
                theme="ovilia-green"
                autoresize
        />
    </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
let options = {
    title: {
        text: 'Wheater Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['City Alpha', 'City Beta', 'City Gamma']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    textStyle:{
        color: 'rgba(236,255,255,1)',
    },
            
 
    xAxis: {
        type: 'value',
        name: 'Days',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['Sunny', 'Cloudy', 'Showers'],
        
        axisLabel: {
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 20,
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
                Sunny: {
                    height: 40,
                    align: 'center',
                },
                Cloudy: {
                    height: 40,
                    align: 'center',
            
                },
                Showers: {
                    height: 40,
                    align: 'center',
            
                }
            }
        }
    },
    series: [
        {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            markPoint: {
                symbolSize: 1,
                symbolOffset: [0, '50%'],
                label: {
                    normal: {
                        formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                        backgroundColor: 'rgb(242,242,242)',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 10],
                        lineHeight: 26,
                        // shadowBlur: 5,
                        // shadowColor: '#000',
                        // shadowOffsetX: 0,
                        // shadowOffsetY: 1,
                        position: 'right',
                        distance: 20,
                        rich: {
                            a: {
                                align: 'center',
                                //color: '#fff',
                                color: 'rgba(236,255,255,1)',
                                fontSize: 18,
                                textShadowBlur: 2,
                                textShadowColor: '#000',
                                textShadowOffsetX: 0,
                                textShadowOffsetY: 1,
                                //textBorderColor: '#333',
                                textBorderColor: 'rgba(236,255,255,1)',
                                textBorderWidth: 2
                            },
                            b: {
                                //color: '#333'
                                color: 'rgba(236,255,255,1)',
                            },
                            c: {
                                //color: '#ff8811',
                                //textBorderColor: '#000',
                                color: 'rgba(236,255,255,1)',
                                textBorderColor: 'rgba(236,255,255,1)',
                                textBorderWidth: 1,
                                fontSize: 22
                            }
                        }
                }
                },
                data: [
                    {type: 'max', name: 'max days: '},
                    {type: 'min', name: 'min days: '}
                ]
            }
        },
        {
            name: 'City Beta',
            type: 'bar',
            data: [150, 105, 110]
        },
        {
            name: 'City Gamma',
            type: 'bar',
            data: [220, 82, 63]
        }
    ]
};
export default {
    name: 'LineD',
    components: {
        "v-chart": ECharts
    },
    data () {
        return {
            bar: options
        }
    }
}
</script>


<style>
.echarts {
    width: 500px;
    max-height: 30%;
}
.icon_vertical {
    float: left;
    width: 2px;
    height: 14px;
    background: rgba(255, 0, 0, 0.5);
    margin: 15px 15px 0 0;
}

.title {
    text-align: left;
    width: 80%;
    height: 44px;
    line-height: 44px;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-size: 16px;
    padding-left: 25px;
}
</style>

<template>
        <div class="row">
        <div class="title">
            <div class="icon_vertical"></div>
            新闻滚动
        </div>
                <div class="panel panel-default">
                    <div class="panel-body">
                            <ul class="demo1">
                                <li v-for="(item, key, index) in news" v-bind:key="index" class="news-item">
                                    <p class="first">{{item.first}}</p>
                                    <p class="content">{{item.center}}</p>
                                    <p class="time">{{item.last}}</p> 
                                </li>
                            </ul>
                    </div>
                </div>
            </div>


</template>

<script>
import data from './news'
let news = data.news
export default {
    name: 'One',
    data () {
        return {
            news
        }
    },
    mounted() {
        $(".demo1").bootstrapNews({
                newsPerPage: 100,
                navigation: false,
                autoplay: true,
                pauseOnHover: true,
                direction: 'up',
                newsTickerInterval: 1000,
                onToDo: function () {
                    //console.log(this);
                }
            });
    },
}
</script>

<style>
.news-item {
    float: left;
    margin: 0 3px 0 5px;
    font-size: 12px;
    height: 50px;
    line-height: 22px;
    margin-bottom: 3px;
    border-bottom: 2px solid gray;
}

.demo1 {
    max-height: 900px;
    overflow: hidden;
}
.news-item p {
    display: inline-block;
}
.first {
    color: #fcc;
}

.time:last {
    display: block;
    content: '';
    clear: both;
}
</style>


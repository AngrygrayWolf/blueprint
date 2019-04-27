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
                                    <img class="img" src="./img/1.png"/>
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
                newsTickerInterval: 2000,
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
    /*height: 85px;*/
    line-height: 13px;
    margin-bottom: 3px;
    border-bottom: 2px solid gray;
    
}

.panel-body{
    width: 100%;
    height: auto;
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
}
.demo1 {
    max-height: 900px;
    overflow: hidden;
}
.news-item p {
    display: inline-block;
    margin: 3px
}
.first {
    /*color: #fcc;*/
    color:rgba(227,216,72,1);
    font-size: 14px;
    font-family: Arial, sans-serif;
    font-weight: bold;
}
.content{
    color:rgba(87,195,202,1);
    font-size: 11px;
}

.time:after {
    display: block;
    content: '';
    clear: both; 
}
.time{
    float: left;
}
.img{
    float: left;
    width: 25px;
    margin: 5px 5px 5px 5px;
}
.demo1 li {
padding: 10px;
border-bottom: 1px dashed #ccc;
}

</style>


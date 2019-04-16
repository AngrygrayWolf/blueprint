<template>
        <div class="row">
        <div class="title">
            <div class="icon_vertical"></div>
            新闻滚动
        </div>
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-list-alt"></span><b>News</b></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <ul class="demo1">
                                    <li class="news-item">
                                        <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p> 
                                    </li>
                                    <li class="news-item">
                                        <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                        <!--<table cellpadding="4">
                                            <tr>
                                                <td><img src="images/2.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>-->
                                    </li>
                                    <li class="news-item">
                                        <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                    
                                    </li>
                                    <li class="news-item">
                                        <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                    </li>
                                    <li class="news-item">
                                        <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                    </li>
                                    <li class="news-item">
                                         <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                    </li>
                                    <li class="news-item">
                                         <p class="first">第一部分内容</p>
                                        <p class="content">第二部分内容</p>
                                        <p class="time">2019-01-12 19:23:23</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel-footer">

                    </div>
                </div>
            </div>

        </div>

</template>

<script>

export default {
    name: 'One',
    mounted() {
        $(".demo1").bootstrapNews({
                newsPerPage: 5,
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
    height: 30px;
    line-height: 22px;
    margin-bottom: 3px;
    border-bottom: 2px solid gray;
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


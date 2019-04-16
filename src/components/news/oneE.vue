<template>
<div>
    <ul class="demo1">
        <li class="news-item">
            <p class="first">第一部分内容</p>
            <p class="content">第二部分内容</p>
            <p class="time">2019-01-12 19:23:23</p>
            <!--<table cellpadding="4">
                <tr>
                    <td><img src="images/1.png" width="60" class="img-circle" /></td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        in venenatis enim... <a href="#">Read more...</a></td>
                </tr>
            </table>-->
        </li>
    </ul>
    </div>
</template>

<script>

export default {
    name: 'One',
    mounted() {
        $(".demo1").bootstrapNews({
                // newsPerPage: 1,
                // autoplay: true,
                // pauseOnHover: true,
                // direction: 'up',
                // newsTickerInterval: 1000,
                // onToDo: function () {
                //     //console.log(this);
                // }
            });
    },
}
</script>

<style>
.news-item {
    float: left;
    margin: 0 3px 0 5px;
    font-size: 12px;
    height: 22px;
    line-height: 22px;
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
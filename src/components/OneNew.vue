<template>
    <div id="products" class="row list-group">
            <div class="item  col-xs-4 col-lg-4">
                <div class="thumbnail">
                    <img class="group list-group-image" src="http://placehold.it/400x250/000/fff" alt="" />
                    <div class="caption">
                        <h4 class="group inner list-group-item-heading">
                            {{title}}</h4>
                        <p class="group inner list-group-item-text">
                            {{content}}</p>
                        <div class="row">
                            <div class="col-xs-12 col-md-6">
                                <a href=""><p class="lead">
                                    演示地址</p></a>
                            </div>
                            <div class="col-xs-12 col-md-6">
                                <a class="btn btn-success" v-bind:href="codeUrl">查看源码</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'OneNew',
    props: {
        'title': {
            type: String,
            default: '项目主题'
        },
        'codeUrl': {
            type: String,
            defalut: 'http://192.168.7.225'
        },
        'content': {
            type: String,
            defalut: '项目内容介绍'
        },
    },
}
</script>


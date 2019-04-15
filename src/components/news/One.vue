<template>
    <div class="container mp30">
        <div class="row">
            <div class="col-md-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-list-alt"></span><b>News</b></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-xs-12">
                                <ul class="demo1">
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/1.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/2.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/3.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/4.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/5.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/6.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
                                    </li>
                                    <li class="news-item">
                                        <table cellpadding="4">
                                            <tr>
                                                <td><img src="images/7.png" width="60" class="img-circle" /></td>
                                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                                    in venenatis enim... <a href="#">Read more...</a></td>
                                            </tr>
                                        </table>
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

</style>


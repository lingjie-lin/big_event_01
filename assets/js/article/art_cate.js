$(function () {

    var layer = layui.layer
    InfinityArtCateList();

    function InfinityArtCateList() {
        $.ajax({
            url: '/my/article/cates',
            success: (res) => {
                console.log(res);
                // 调用模板
                // var htmlStr = template('tpl-art-cate', { data: res.data })
                var htmlStr = template('tpl-art-cate', res)
                $('tbody').html(htmlStr)
            }
        });
    }
})
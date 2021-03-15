$(function () {

    let layer = layui.layer
    InfinityArtCateList();

    function InfinityArtCateList() {
        $.ajax({
            url: '/my/article/cates',
            success: (res) => {
                console.log(res);
                // 调用模板
                let htmlStr = template('tpl-art-cate', { data: res.data })
                $('tbody').html(htmlStr)
            }
        });
    }
})
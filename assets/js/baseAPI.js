// 开发环境服务器地址
let baseURL = 'http://ajax.frontend.itheima.net'


// 拦截所有ajax请求
// 处理参数
$.ajaxPrefilter(function (options) {
    // 拼接对应服务器地址
    options.url = baseURL + options.url
})
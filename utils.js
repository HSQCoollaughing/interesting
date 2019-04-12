//取得[n,m]范围随机数
function fullClose(n,m) {
    var result = Math.random()*(m+1-n)+n;
    while(result>m) {
        result = Math.random()*(m+1-n)+n;
    }
    return result;
}

//取得(n,m)范围随机数
function fullOpen(n,m) {
    var result = Math.random()*(m-n)+n;
    while(result == n) {
        result = Math.random()*(m-n)+n;
    }
    return result;
}

//取得(n,m]范围随机数
function leftOpen(n,m) {
    var result = Math.random()*(m-n+1)+n-1;
    while(result<n) {
        result = Math.random()*(m-n+1)+n-1;
    }
    return result;
}


//
// var countdown=60;
// function settime(obj) {
//     if (countdown == 0) {
//         obj.removeAttribute("disabled");
//         obj.value="免费获取验证码";
//         countdown = 60;
//         return;
//     } else {
//         obj.setAttribute("disabled", true);
//         obj.value="重新发送(" + countdown + ")";
//         countdown--;
//     }
//     setTimeout(function() {
//             settime(obj) }
//         ,1000)
// }
//
// ---------------------
//     作者：聆听1991
// 来源：CSDN
// 原文：https://blog.csdn.net/I_am_listen/article/details/53056354
//     版权声明：本文为博主原创文章，转载请附上博文链接！

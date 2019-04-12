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

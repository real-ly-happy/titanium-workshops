
function setUrl(url){
    $.webView.url = url;
}

$.webView.addEventListener('beforeload', function(e){
    // if(e.navigationType == Ti.UI.iOS.WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED) {
    //     console.log('load new url ' + e.url);
    // } else {
    //     $.webView.stopLoading();
    // }
    console.log('before load' + e.url);
});

$.webView.addEventListener('load', function(e){
    console.log('loaded' + e.url);
});


exports.setUrl = setUrl;

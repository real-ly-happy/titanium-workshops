var args = arguments[0] || {};


require('contentLoader').getVideo(function(err, data){
    if(err) {
        Ti.API.debug('loading video failed ' + err);
    } else {
        $.videoPlayer.url = data.result.videos[0].content_url;
        $.webviewWidget.setUrl(data.result.videos[0].web_urls.sedenne);
    }
}, args.id);


$.lblClose.addEventListener('click', function(){
    args.closeDetail();
});

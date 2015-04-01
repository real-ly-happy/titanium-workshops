var args = arguments[0] || {};


require('contentLoader').getVideo(function(err, data){
    Ti.API.debug(data);
}, args.id);

$.lblClose.addEventListener('click', function(){
    args.closeDetail();
});


// var categories = [
//     {

//     }
// ];

require('contentLoader').getCategories(function(err, data){
    if(err) {
        console.log('error loading ' + err);
        //Ti.API.debug('error loading ' + err);
    }

    //Ti.API.debug('content is ' + JSON.stringify(data));
    var items = [];

    for (var i = 0 ; i < 10 && i < data.result.videos.length; i++ ) {
        var video = data.result.videos[i];
        items.push({
            imgCategory: {
                image: video.image.url
            },
            lblCategory: {
                text: video.title
            },
            id: video.id,
            template: 'categoryTemplate'
        });
    }

    // bind data to list view
    $.categoriesSection.setItems(items);
});


// open detail page on click
$.videoList.addEventListener('itemclick', function(e){
    var item = $.categoriesSection.getItemAt(e.itemIndex);

    $.detailContainer.add(Alloy.createController('detail', { 
        id: item.id,
        closeDetail: closeDetail
    }).getView());

    $.detailContainer.visible = true;
    $.detailContainer.animate({
        left: 0,
        duration: 200
    });
});

var closeDetail = function closeDetail() {
    $.detailContainer.animate({
        left: '99%',
        duration: 200
    }, function(){
        $.detailContainer.removeAllChildren();
        $.detailContainer.visible = false;
    });
};

$.index.open();

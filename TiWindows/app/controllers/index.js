
Alloy.Globals.message = 'message';

function loadNews(){
    Ti.API.debug('message is ' + Alloy.Globals.message);
    $.content.add(Alloy.createController('news').getView());
}

function getData(){
    return "this is index";
}

// bind data 
for(var i=0;i<10;i++){
    var menu = Alloy.createModel('menus',{ name: 'menu ' + i, ingrediant: 'alloy,egg' });
    menu.save();
}

var menus = Alloy.createCollection('menus');
menus.fetch();

// collection.fetchAllOrderByIndexRank();
// dataSource.dataList = collection;

// end bind data

var data = [];

menus.each(function(menu, index){
    var row = Alloy.createController('movieRow', {
        title: menu.get('name') + menu.get('id')
    }).getView();
    data.push(row);
});

$.tableMovies.setData(data);

$.mainWindow.open();


exports.getData = getData;

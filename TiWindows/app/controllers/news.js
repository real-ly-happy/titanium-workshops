

// var newsLoader = require('newsLoader');
// var data = newsLoader.load();
var data = [];

for (var i = 0;i<20;i++) {
    data.push({
        title: {
            text: String.format('item %d', i)
        },
        template: (i%2 === 0)?'defaultTemplate':'highlightTemplate',
        searchableText:"Papaya"+i
    });
}

$.sectionNews.setItems(data);
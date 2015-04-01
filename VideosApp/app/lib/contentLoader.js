
var sourceUrl = 'http://ws.vipr.startsiden.no/v1/videos';
var sourceVideoUrl = 'http://ws.vipr.startsiden.no/v1/videos?id=';


function ContentLoader(){}

ContentLoader.prototype.getCategories = function (cb) {
    var client = Ti.Network.createHTTPClient({
        onload: function(){
            cb(null, JSON.parse(this.responseText));
        },
        onerror: function(err) {
            cb(err.error);
        },
        timeout: 2000
    });
    client.open('GET',sourceUrl);
    client.send();
};

ContentLoader.prototype.getVideo = function(cb, id) {
    // load json from video api
    var client = Ti.Network.createHTTPClient({
        onload: function(){
            var fileName = id + '.json';
            // save to application
            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDirectory, fileName);
            file.write(this.responseText);
            // file.save();
            // parse to object and return
            var video = JSON.parse(file.read().text);
            cb(null, video);
        },
        onerror: function(err) {
            cb(err.error);
        },
        timeout: 2000
    });
    client.open('GET',sourceVideoUrl + id);
    client.send();
};

module.exports = new ContentLoader();

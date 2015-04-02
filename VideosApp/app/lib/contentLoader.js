
function ContentLoader(){
    var self = this;
    self.sourceUrl = Alloy.CFG.videoListApi;
    self.sourceVideoUrl = Alloy.CFG.videoApi;
}

ContentLoader.prototype.getCategories = function (cb) {
    var self = this;
    var client = Ti.Network.createHTTPClient({
        onload: function(){
            cb(null, JSON.parse(this.responseText));
        },
        onerror: function(err) {
            cb(err.error);
        },
        timeout: 2000
    });
    client.open('GET',self.sourceUrl);
    client.send();
};

ContentLoader.prototype.getVideo = function(cb, id) {
    var self = this;
    // load json from video api
    var client = Ti.Network.createHTTPClient({
        onload: function(){
            var fileName = id + '.json';
            // save to application
            var file = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory, fileName);
            file.write(this.responseText);
            // parse to object and return
            var video = JSON.parse(file.read().text);
            //var video = JSON.parse(this.responseText);
            cb(null, video);
        },
        onerror: function(err) {
            cb(err.error);
        },
        timeout: 2000
    });
    client.open('GET',this.sourceVideoUrl.replace('[:id]',id));
    client.send();
};

module.exports = new ContentLoader();

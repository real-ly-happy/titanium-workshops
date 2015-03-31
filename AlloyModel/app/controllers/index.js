
var users = Alloy.createCollection('user');
users.fetch();

var user = users.get(4);
user.set('name','Peter');
user.save();

users.each( function(user) {
    Ti.API.debug(String.format('user id %d is %s has email %s', user.get('id'), user.get('name'), user.get('email')));
});

$.index.open();

migration.up = function(db) {
    for (var i=0; i< 20; i++) {
        db.db.execute("INSERT INTO restaurant (name,address) VALUES ('migrate_restaurant_"+i+"','exchange')");
    }
};

migration.down = function(db) {

};

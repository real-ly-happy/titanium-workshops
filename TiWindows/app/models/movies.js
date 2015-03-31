exports.definition = {
    columns: {
        "id": "INTEGER PRIMARY KEY",
        "title": "VARCHAR(50)",
        "score": "INTEGER"
    },
    config : {
        adapter : {
            "type" : "sql",
            "collection_name" : "movies",
            "db_file" : "/movie.sqlite",
            "db_name" : "movie",
            "idAttribute" : "id",
            "remoteBackup" : false
        }
    },
    extendModel : function(Model) {
        _.extend(Model.prototype, {
            // extended functions and properties go here
        });

        return Model;
    },
    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            // // delete rows based on alloy_ids
            // deleteByIds : function(ids) {
            //     this.each(function(item) {
            //         var record_id = item.get("record_id");
            //         if (_.contains(ids, record_id)) {
            //             Ti.API.debug("Delete log entry " + record_id);
            //             item.destroy();
            //         }
            //     });
            // }
        });

        return Collection;
    }
}; 
    exports.definition = {
        config: {
            columns: {
                "id": "integer primary key",
                "name": "text",
                "email": "text"
            },
            adapter: {
                type: "sql",
                idAttribute: 'id',
                collection_name: "user"
            }
        },
        extendModel: function(Model) {
            _.extend(Model.prototype, {
                // extended functions and properties go here
            });

            return Model;
        },
        extendCollection: function(Collection) {
            _.extend(Collection.prototype, {
                // extended functions and properties go here
            });

            return Collection;
        }
    };
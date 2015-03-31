exports.definition = {
	config: {
		columns: {
		    "id": "integer",
		    "name": "varchar",
		    "address": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "restaurant"
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
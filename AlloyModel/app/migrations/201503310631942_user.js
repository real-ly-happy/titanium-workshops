var sample_data = [
    { name: 'Jane', email: 'jane@real-ly-happy.com' },
    { name: 'Luzy', email: 'luzy@real-ly-happy.com' },
    { name: 'Rose', email: 'rose@real-ly-happy.com' },
    { name: 'Amegel', email: 'amegel@real-ly-happy.com' },
    { name: 'Groege', email: 'groege@real-ly-happy.com' },
    { name: 'Adam', email: 'adam@real-ly-happy.com' },
];

migration.up = function(db) {
    sample_data.forEach(function(data){
        db.insertRow(data);
    });
};

migration.down = function(db) {

};

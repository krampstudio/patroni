
import rethinkdb from 'rethinkdb';
import config     from '../config/default.js';

const tables = [
    'lawyers',
    'consultations',
    'users',
    'payments'
];

rethinkdb
    .connect(config.rethinkdb)
    .then(connection => {
        rethinkdb
            .dbCreate(config.rethinkdb.db)
            .run(connection)
            .then( () => {
                return rethinkdb
                    .expr(tables)
                    .forEach( table => rethinkdb.tableCreate(table) )
                    .run(connection);
            })
            .then( () => {
                console.log('Tables created');
                connection.close();
            });
    })
    .catch( err => console.error(err) );


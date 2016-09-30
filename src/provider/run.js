import rethinkdb from 'rethinkdb';
import config from '../../config/default.js';

/**
 * Manages connection configuration.
 * @returns {Promise}
 */
export default function run(query){

    return new Promise( (resolve, reject) => {

        if(typeof query !== 'function'){
            return reject(new TypeError('A valid rethinkdb query is required'));
        }

        return rethinkdb.connect(config.rethinkdb)
            .then( c => {
                const close = () => {
                    if(c){
                        c.close();
                    }
                };
                return query.run(c)
                            .then( resolve )
                            .then( close )
                            .catch( err => {
                                close();
                                reject(err);
                            });
            });
    });
}

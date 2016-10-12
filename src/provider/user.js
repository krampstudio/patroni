import rethinkdb from 'rethinkdb';
import run from './run.js';

const userProvider = function userProvider(){

    return {
        get(login){
            return run(rethinkdb.table('users').get(login));
        }
    };
};

export default userProvider;

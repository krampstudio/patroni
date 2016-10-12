import rethinkdb from 'rethinkdb';
import run from './run.js';

const lawyerProvider = function lawyerProvider(){

    return {
        get(){
            return run(rethinkdb.table('lawyers').get(1));
        },
        getAll(){
            return run(rethinkdb.table('lawyers').getAll());
        }
    };
};

export default lawyerProvider;

import rethinkdb from 'rethinkdb';
import run from './run.js';

const lawyerProvider = function lawyerProvider(){

    return {
        getLawyer(){
            return run(rethinkdb.table('lawyers').get(1));
        }
    };
};

export default lawyerProvider;

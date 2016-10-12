//import lawyerProvider from './provider/lawyers.js';

//lawyerProvider().getLawyer().then( data => console.log(data)).catch(err => console.error(err));
//

import restify from 'restify';

const server = restify.createServer();

server.get('/user/:login',

server.get(/.*/, restify.serveStatic({
    directory: 'public',
    default: 'index.html'
}));
server.listen(8180, () => console.log('Server started'));



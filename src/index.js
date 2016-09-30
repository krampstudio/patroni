import lawyerProvider from './provider/lawyers.js';

lawyerProvider().getLawyer().then( data => console.log(data)).catch(err => console.error(err));

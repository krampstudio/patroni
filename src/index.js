import http from 'http';

const server = http.createServer( (req, res) => {
    res.write('foo');
    res.end();
});
server.listen(4433);

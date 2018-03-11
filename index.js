var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

    const {pathname} = url.parse(req.url, true);
    const {spawnSync} = require('child_process');
    let endpoint; //https://docs.docker.com/engine/api/

    switch (pathname) {
        case "/containers/list":
            endpoint = 'http:/v1.24/containers/json?all=true';
            break;

        case "/containers/list/running":
            endpoint = 'http:/v1.24/containers/json';
            break;

        default:
            endpoint = 'http:/v1.24/containers/json?all=true';

    }

    let {stdout, stderr} = spawnSync('curl', ['--unix-socket', '/var/run/docker.sock', endpoint]);

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(stdout.toString());
    res.end();

}).listen(80);

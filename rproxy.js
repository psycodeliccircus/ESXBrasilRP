/*
Project Name: ESXBrasil Launcher (esxbrasil.online)
Language Used: NodeJS
Developer/s: RenildoMarcio
All Reserve Rights ESXBrasil 2020 - 2021
*/
var tcpProxy = require("node-tcp-proxy")
var udpProxy = require('udp-proxy')
const httpRequest = require('http')
var net = require('net')

var rPort = 30118
var rConnected = null
var rServers = [
    "177.54.150.119"
]
var localTCPServer = null
var localUDPServer = null
var localWebServer = null

function portInUse(port, callback) {
    var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);
    });

    server.listen(port, '127.0.0.1');
    server.on('error', function (e) {
	callback(true);
    });
    server.on('listening', function (e) {
	server.close();
	callback(false);
    });
};


function clientConnect() {
    if (rConnected == null) {
        console.log("Checking available servers..")
        for(let val of rServers) {
            if (rConnected == null) {
                const req = httpRequest.request({
                    hostname: val,
                    port: rPort,
                    path: '',
                    method: 'GET',
                    timeout: 2000
                }, res => {
                    if (res.statusCode == 200) {
                        if (rConnected == null) {
                            rConnected = val
                            console.log("Found available host " + val + ":" + rPort)
                            clientStartCheckingOnline()
                            clientStartRProxy()
                        }
                    }
                })
                req.on('error', error => {
                    console.error(error)
                })
                req.end()
            }
        }
    }
}

function clientStartCheckingOnline() {
    if (rConnected != null) {
        console.log("Checking host is online " + rConnected + ":" + rPort)
        const req = httpRequest.request({
            hostname: rConnected,
            port: rPort,
            path: '',
            method: 'GET'
        }, res => {
            if (res.statusCode != 200) {
                rConnected = null
                clientConnect()
            } else {
                setTimeout(clientStartCheckingOnline, 1000)
            }
        })
        req.on('error', error => {
            rConnected = null
            clientConnect()
        })
        req.end()
    }
}

function clientStartRProxy() {
    if (localTCPServer) {
        localTCPServer.end()
        localTCPServer = null
    }
    if (localUDPServer) {
        localUDPServer.close()
        localUDPServer = null
    }
    if (localWebServer) {
        localWebServer.end()
        localWebServer = null
    }
    portInUse(rPort, function(vl) {
        
    })
    console.log("Created local proxy server for " + rConnected + ":" + rPort)
    localTCPServer = tcpProxy.createProxy(rPort, rConnected, rPort)
    localUDPServer = udpProxy.createServer({
        address: rConnected,
        port: rPort,
        localport: rPort,
        timeOutTime: 10000
    })
}

clientConnect()

/*
Project Name: ESXBrasil Launcher (esxbrasil.online)
Language Used: NodeJS.
Developer/s: RenildoMarcio
All Reserve Rights ESXBrasil 2020 - 2021
*/
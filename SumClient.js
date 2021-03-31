var buffer = require('buffer');
var udp = require('dgram');
// creating a client socket
var client = udp.createSocket('udp4');
//buffer msg
var data = Buffer.from('123');
client.on('message', function(num, info) {
    console.log('Data received from server : ' + num.toString());
    //console.log('Received %d bytes from %s:%d\n', str.length, info.address, info.port);
});
//sending msg
client.send(data, 2222, 'localhost', function(error) {
    if (error) {
        client.close();
    } else {
        console.log('Data sent !!!');
    }
});

client.on('close', function() {
    console.log('Client Socket is closed !');
});
setTimeout(function() {
    client.close();
}, 8000);
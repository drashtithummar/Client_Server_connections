var udp = require('dgram');
// --------------------creating a udp server --------------------
// creating a udp server
var server = udp.createSocket('udp4');
// emits when any error occurs
server.on('error', function(error) {
    console.log('Error: ' + error);
    server.close();
});
// emits on new datagram msg
server.on('message', function(num, info) {
    console.log('Data received from client : ' + num.toString());
    //console.log('Received %d bytes from %s:%d\n', str.length, info.address, info.port);
    //sending msg
    function isPrime(num) {

        if (num == 2) {
          return num +' is prime';
        } else if (num > 1) {
          for (var i = 2; i < num; i++) {
      
            if (num % i !== 0) {
              return num+' is prime';
            } else if (num === i * i) {
              return num+' is not Prime';
            } else {
              return num+' is not prime';
            }
          }
        } else {
          return num+ ' is not prime';
        }
      
      }
    server.send(isPrime(num), info.port, 'localhost', function(error) {
        if (error) {
            client.close();
        } else {
            console.log('Number  is prime or not checked');
        }
    });
});
//emits when socket is ready and listening for datagram msgs
server.on('listening', function() {
    var address = server.address();
    var port = address.port;
    var family = address.family;
    var ipaddr = address.address;
    console.log('Server is listening at port' + port);
    console.log('Server ip :' + ipaddr);
    console.log('Server is IP4/IP6 : ' + family);
});
//emits after the socket is closed using socket.close();
server.on('close', function() {
    console.log('Socket is closed !');
});
server.bind(2222);
setTimeout(function() {
    server.close();
}, 8000);
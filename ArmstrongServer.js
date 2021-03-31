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
    function checkarmstorng(num) {
        let sum=0;
        const numberOfDigits = num.length;
        let temp = num;
        while (temp > 0) {
            let remainder = temp % 10;
        
            sum += remainder ** numberOfDigits;
        
            temp = parseInt(temp / 10); // convert float into integer
        }
    
        if (sum == num) {
            return num + ' is the Armstrong number.'
        }
        else {
            return num + ' is not the Armstrong number.'
        }
       
    }

    server.send(checkarmstorng(num), info.port, 'localhost', function(error) {
        if (error) {
            client.close();
        } else {
            console.log('Number is Armstrong or not is checked');
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
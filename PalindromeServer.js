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
server.on('message', function(str, info) {
    console.log('Data received from client : ' + str.toString());
    //console.log('Received %d bytes from %s:%d\n', str.length, info.address, info.port);
    //sending msg
    function checkPalindrome(str) {

        // find the length of a string
        const len = str.length;
    
        // loop through half of the string
        for (let i = 0; i < len / 2; i++) {
    
            // check if first and last string are same
            if (str[i] !== str[len - 1 - i]) {
                return 'It is not a palindrome';
            }
        }
        return 'It is a palindrome';
    }
    server.send(checkPalindrome(str), info.port, 'localhost', function(error) {
        if (error) {
            client.close();
        } else {
            console.log('Palindrome is or not checked');
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
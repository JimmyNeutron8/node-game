// Require dependencies
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

// Some server variables
const port = 5000;

// Create server stuff
const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set('port', port);
app.use('/static', express.static(__dirname + '/static'));

// Setup routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the Server
server.listen(port, () => {
  console.log('Server started on port ' + port);
});

// Accept new connections
io.on('connection', (socket) => {
  console.log('A player connected.');
});

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*', methods: ['GET', 'POST'] } });

app.use(cors());

let messages = [];
let users = [];

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);
  
  socket.on('join', (username) => {
    users.push({ id: socket.id, username });
    io.emit('updateUsers', users);
  });
  
  socket.on('message', (messageData) => {
    messages.push(messageData);
    io.emit('message', messageData);
  });
  
  socket.on('disconnect', () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit('updateUsers', users);
    console.log(`User disconnected: ${socket.id}`);
  });
});

app.get('/history', (req, res) => {
  res.json(messages);
});

server.listen(3000, () => console.log('Server running on port 3000'));

import express from 'express';
import Drinks from './config/drinks';
import http from 'http';
import { Server } from 'socket.io';
import pourManager from './pourManager';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
    }
});

pourManager.setIO(io);

const port = process.env.PORT || 8080;

app.use(cors());

/**
 *  HTTP Routes
 */
app.get('/', (req, res) => {
    res.send('Server is up!');
});

app.get('/drinks', (req, res) => {
    const json = JSON.stringify(Drinks);
    res.send(json);
});

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);});

/**
 * Socket Handling
 */
io.on('connection', (socket) => {
    console.log('connected');

    pourManager.bind(socket);

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
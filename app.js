const express = require('express');
const app = express();
const path = require('path');
const {Server} = require('socket.io');
const {v4} = require('uuid');
app.set('port',3000);
let notes = [];

app.use('/',express.static(path.join(__dirname,'./src/public')));

let servidor = app.listen(app.get('port'),()=>{
    console.log(`server in port ${app.get('port')}`);
});



const  io = new Server(servidor);

io.on('connect',(sockets)=>{
    console.log('alguien se conecto');
      sockets.emit('server:load notes',notes);
      sockets.on('client:new note',(data)=>{
        const note = {...data,id:v4()};
            notes.push(note);
            io.sockets.emit('server:new note',note);
      })
     

    sockets.on('delete:note',(id)=>{
      notes = notes.filter(note=> note.id !== id);
       io.sockets.emit('server:load notes',notes);

    })

    sockets.on('update:note',(id)=>{
            const note = notes.find(note=> note.id === id);
        io.sockets.emit('selected note',note);
    })
   

    sockets.on('clientUpdate:note',(data)=>{
        const search_note =  notes.find((note)=> note.id === data.id);
        search_note.title = data.title;
        search_note.description = data.description;
        io.sockets.emit('server:load notes',notes);
    });
})


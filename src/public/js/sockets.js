const saveNote = async(title,description)=>{
    socket.emit('client:new note',{
        title,
        description
    })  

   
}


const delete_note = (id)=>{
       socket.emit('delete:note',id);
}

socket.on('server:load notes',(notes)=>{
      render_notes(notes);
});
  

socket.on('server:new note',(data)=>{
     const notes =  appendNote(data);
     ctr_notes.appendChild(notes);
});

const update_note = (id)=>{
    socket.emit('update:note',id);
}


const getUpdateNote = (id,title,description)=>{
        
    socket.emit('clientUpdate:note',{
        id,
        title,
        description
    });
}




socket.on('selected note',(data)=>{
     console.log(data);
     title.value = data.title;
     description.value = data.description;
     saveId = data.id;
});








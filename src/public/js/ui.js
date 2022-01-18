const ctr_notes = document.querySelector('.ctr_notes');


const appendNote = (note)=>{
     
    const div = document.createElement('div');
    div.className = 'card card-body p-0 my-2  animate__animated animate__fadeInDown';
    div.innerHTML = `<h1 class="h3 card-header">${note.title}</h1>
    <div class="d-flex justify-content-evenly py-2 align-items-center">
      <p class="mb-0">${note.description}</p>
      <div class="buttons d-flex">
        <button class="btn btn-danger m-1 eliminar" data-id="${note.id}">delete</button>
        <button class="btn btn-secondary m-1 actualizar" data-id="${note.id}">update</button>
      </div>
    </div>`
    

    div.querySelector('.eliminar').addEventListener('click',e=>{
        console.log(e.target.dataset.id);
        delete_note(e.target.dataset.id);
    })

    div.querySelector('.actualizar').addEventListener('click',(e)=>{
        update_note(e.target.dataset.id);
    });


    return div;
}



const render_notes = (notes = [])=>{
    ctr_notes.innerHTML = '';
         notes.forEach(note=>{
              const notes_list = appendNote(note);
               ctr_notes.appendChild(notes_list);
         })
}
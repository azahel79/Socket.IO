const socket = io();
let saveId = '';
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const add_task = document.querySelector('.add_task');

console.log(socket);


add_task.addEventListener('click',e=>{
    e.preventDefault();


    if(saveId){
        console.log('vamos a actualizar');

        getUpdateNote(saveId,title.value,description.value);

        saveId = '';
    }else{
        saveNote(title.value,description.value);
        description.value = '';
        title.value = '';
    }
    
})







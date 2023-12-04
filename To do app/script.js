// Declaration of variables
let outerContainer=document.getElementById('tasks-container');
let textInput=document.getElementById('text-input');
let innerContainer,task,doneBtn,removeBtn,inBtncontainer;
let taskStore=[];

// assigning for on refresh operation activities

window.onload= ()=>{
   taskStore= JSON.parse(localStorage.getItem('store')) || [] ;
   taskStore.forEach(taskIn=>addTask(taskIn));

}

textInput.addEventListener('keydown',(event)=>{
    if(event.key==='Enter'){
       if(textInput.value===''){
        alert('Enter something!');
       }
       else{
        // storing the task in array
        taskStore.push(textInput.value);
        // storing the tasks to local storage
        localStorage.setItem('store',JSON.stringify(taskStore));
        // adding the task to the containers
        addTask(textInput.value);
        // making the input box empty
        textInput.value='';
       }
    }
})

// function to add the elements

function addTask(taskIn){
    // container
    let innerContainer=document.createElement('div');
    innerContainer.className='in-container';
    // task texts
    let task=document.createElement('h3');
    task.className='txt-in';
    // checkbox
    let doneBtn=document.createElement('button');
    doneBtn.id='done';
    doneBtn.textContent='👎'
    // remove Button
    removeBtn=document.createElement('button');
    removeBtn.id='remove-btn'
    removeBtn.innerHTML='Delete'
    // inner button container
    inBtncontainer=document.createElement('div');
    inBtncontainer.className='in-btn-container'
    // assign value
    task.innerText=taskIn;
    // adding to container display


    inBtncontainer.appendChild(doneBtn);
    inBtncontainer.appendChild(removeBtn);
    innerContainer.appendChild(task);
    innerContainer.appendChild(inBtncontainer);
    outerContainer.appendChild(innerContainer);
    // listener on done button
    doneBtn.addEventListener('click',()=>{
        removeTask(taskIn);
        task.style.textDecoration='line-through';
        doneBtn.textContent='👍'
    })
    removeBtn.addEventListener('click',()=>{
        outerContainer.removeChild(innerContainer);
        removeTask(taskIn);
    })
}

// Function for removing the task
function removeTask(taskof){
  

    let taskIndex=taskStore.indexOf(taskof);
    if(taskIndex>=0)
    {
        taskStore.splice(taskIndex,1);
      
    }
    localStorage.setItem('store',JSON.stringify(taskStore));

}

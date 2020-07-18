//define UI variables

const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners 
loadEventListener();
//load all event listeners
function loadEventListener(){
    //dom load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //add task
    form.addEventListener('submit', addTask);
    //remove task
    tasklist.addEventListener('click', removeTask)
    //clear task evnet
    clearBtn.addEventListener('click', clearTasks);
    //filter tasks events
    filter.addEventListener('keyup', filterTasks);

}

//get tasks
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        //Create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(tasks));
    //create new link element
    const link = document.createElement('a');
    //dd class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append the link to li
    li.appendChild(link);
    //append li ti=o ul
    tasklist.appendChild(li);
    });
}


//add task
function addTask (e){
    if (taskInputInput.value === '') {
        alert('add a task');
    }
    //Create li element
    const li = document.createElement('li');

    //add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create new link element
    const link = document.createElement('a');
    //dd class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //append the link to li
    li.appendChild(link);
    //append li ti=o ul
    tasklist.appendChild(li);
    
    //stroe in local storage
    storeTaskInLocalStorage(taskInput.value);

    taskInput.value='';

    e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks',JASON.stringify(tasks));
}

//remove task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')){
       if(confirm('Are You Sure?')){
        e.target.parentElement.parentElement.remove();

        //remove from ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}
}


function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = [];
    } else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks,forEach(function(tasks){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks () {
    
    //tasklist.innerHTML='';
    //faster
    while (tasklist.firstChild) {
        tasklist.removeChild(tasklist.firstChild)
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage(){
    localStorage.clear();
}



function filterTasks(e) {
    const tect = e.targer.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        } else {
            task.style.display='none';
        }
    });
}
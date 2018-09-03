const checkBtn = document.getElementsByClassName('check-btn'),
    taskDescription = document.getElementById('add-task'),
    list = document.getElementById('list'),
    addTaskBtn = document.getElementById('add-btn'),
    listTitle = document.getElementById('list-title'),
    numberOfItemsToRemove = 1,
    spanIndex = 1,
    taskListMaxLenght = 10;

let taskList = [];

// enable add button
taskDescription.addEventListener('keyup', function(){
    if(isBlank(taskDescription.value)){
        addTaskBtn.disabled = true;
    } else {
        addTaskBtn.disabled = false;
    }
})

// add event listener to add-button
addTaskBtn.addEventListener('click', addTask);

// add the task to task list
function addTask() {
    if(taskList.length < taskListMaxLenght) {
        taskList.push(taskDescription.value);
        taskDescription.value = '';
        addTaskList();
        checkArrayLenght();
        prepareToDnD();
        addTaskBtn.disabled = true;
    }
}

function addTaskList(){
    let checkBtn = document.createElement('i'),
        deleteBtn = document.createElement('i'),
        span = document.createElement('span'),
        newLi = document.createElement('li');

    checkBtn.classList.add('material-icons','check-btn');
    checkBtn.innerHTML = 'check';

    // add check button function
    checkBtn.addEventListener('click', function(){
        checkBtn.classList.add('checked');
    })

    deleteBtn.classList.add('material-icons','delete-btn');
    deleteBtn.innerHTML = 'delete';

    // add delete item from task list array and remove from display
    deleteBtn.addEventListener('click', function() {
        let listItemToRemove = this.parentElement, 
            j = taskList.indexOf(listItemToRemove.childNodes[spanIndex].textContent); 
        
        taskList.splice(j,numberOfItemsToRemove);
        list.removeChild(listItemToRemove);
        prepareToDnD();
        checkArrayLenght();
    })

    for (let i = 0; i < taskList.length; i++) {
        span.innerHTML = taskList[i];
        newLi.draggable = true;
        newLi.appendChild(checkBtn);
        newLi.appendChild(span);
        newLi.appendChild(deleteBtn);
        list.appendChild(newLi);
    }
}

function isBlank(blancString) {
    return !blancString || /^\s*$/.test(blancString);
}

function checkArrayLenght() {
    let span = document.createElement('span');

    span.innerHTML = 'Maximum item per list are created';
    span.setAttribute('id','notification');

    if(taskList.length < taskListMaxLenght) {
        taskDescription.disabled = false;

        if(document.getElementById('notification')){
            listTitle.removeChild(document.getElementById('notification'));
        }

    } else {
        taskDescription.disabled = true;
        listTitle.appendChild(span);
    }
}

// Drag 'n' Drop functionality
let dragItems = [];

function prepareToDnD() {
    dragItems = document.querySelectorAll('#list > li');
    for (let i = 0; i < dragItems.length; i++) {
        dragItems[i].setAttribute('draggable', 'true');
        dragItems[i].addEventListener('dragstart', dragStart, false);
        dragItems[i].addEventListener('dragend', dragEnd);
        dragItems[i].addEventListener('drop', dragDrop, false);
        dragItems[i].addEventListener('dragenter', dragEnter);
        dragItems[i].addEventListener('dragleave', dragLeave);
        dragItems[i].addEventListener('dragover', cancel, false);
    }
}

function dragStart(e) {
    const indexDragEl = getIndex(dragItems, this);

    this.style.opacity = '0.4';

    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text', indexDragEl);     
}

function dragEnd(e) {
    this.style.opacity = 'unset';
}

function dragDrop(e) {
    cancel(e);
    
    let oldIndex = e.dataTransfer.getData('text'),
        target = e.target,
        newIndex = getIndex(dragItems, target),
        dropped = dragItems[oldIndex];

    target.classList.remove('drag-zone');

    if(newIndex < oldIndex) {
        list.removeChild(dropped);
        list.insertBefore(dropped, dragItems[newIndex]);
        prepareToDnD();
    } else {
        list.removeChild(dropped);
        list.insertBefore(dropped, dragItems[++newIndex]);
        prepareToDnD();
    }
}

function dragLeave(e) {
    this.classList.remove('drag-zone');
}

function dragEnter(e) {
    cancel(e);

    this.classList.add('drag-zone');
}

function cancel(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    if (e.stopPropagation) {
        e.stopPropagation();
    }

    return false;
}

function getIndex(array, item) {
    for ( let i = 0; i < array.length; i++) {
        if(array[i] === item) {
            return i;
        }
    }
}
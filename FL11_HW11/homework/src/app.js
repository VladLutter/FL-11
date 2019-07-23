let rootNode = document.getElementById('root'),
    inputTask = document.getElementById('input-task'),
    addBtn = document.getElementById('add'),
    saveIcon = '<i class="material-icons save">save</i>',
    editIcon = '<i class="material-icons edit">edit</i>',
    delIcon = '<i class="material-icons delete">delete</i>',
    ul = document.querySelector('.list'),
    message = document.querySelector('.message'),
    maxTask = 10,
    dragged;

function newTaskInput() {
    let inputText = document.getElementById('input-task').value;
    let span = document.createElement('span');
    span.className = 'task';
    span.innerText = inputText;
    return span;
}

function createTask() {
    let ListItems = document.querySelectorAll('.list-item');
    if (ListItems.length < maxTask && document.getElementById('input-task').value !== '') {
        let task = newTaskInput();
        let newLi = addItem(task);
        ul.appendChild(newLi);
        document.getElementById('input-task').value = '';
        addBtn.style.color = '#c6d0d7';
    } else if (document.getElementById('input-task').value === '') {
        return false;
    } else {
        message.innerText = 'Maximum numbers of items were created!';
        document.getElementById('input-task').value = '';
        addBtn.style.color = '#c6d0d7';
    }
}

function editTask(action) {
    let eventItem = action.target;
    if (eventItem.className === 'material-icons edit') {
        let li = eventItem.parentNode,
            liBuffer = li,
            newLi = document.createElement('li'),
            input = document.createElement('input');
        input.type = 'text';
        input.className = 'replace-task';
        newLi.appendChild(input);
        newLi.innerHTML += saveIcon;
        li.parentNode.replaceChild(newLi, li);
        let saveButton = document.querySelector('.save');
        saveButton.addEventListener('click', () => {
            let newTask = document.querySelector('.replace-task').value;
            if (newTask !== '') {
                liBuffer.children[1].innerText = newTask;
                newLi.parentNode.replaceChild(liBuffer, newLi);
            }
        });
    }
    action.stopPropagation();
}

function changeTask(action) {
    deleteTask(action);
    editTask(action);
}

function deleteTask(action) {
    let eventItem = action.target;
    if (eventItem.className === 'material-icons delete') {
        let li = eventItem.parentNode;
        li.parentNode.removeChild(li);
        if (document.querySelectorAll('.list-item').length < maxTask) {
            message.innerText = ''
        }
    }
    action.stopPropagation();
}

function addItem(task) {
    let newLi = document.createElement('li');
    newLi.className = 'list-item';
    newLi.setAttribute('draggable', 'true');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.appendChild(checkbox);
    newLi.appendChild(task);
    newLi.innerHTML += editIcon;
    newLi.innerHTML += delIcon;
    return newLi;
}

inputTask.addEventListener('input', () => {
    let inputText = document.getElementById('input-task').value;
    if (inputText !== '') {
        addBtn.style.color = '#00a9eb';
    }
});

function checkedDisable(action) {
    let check = action.target;
    if (check.checked) {
        check.setAttribute('disabled', 'disabled');
    }
}

function dragStart(action) {
    action.dataTransfer.effectAllowed = 'move';
    if (action.target.className === 'list-item') {
        dragged = action.target;
    }
}

function setBorder(action) {
    if (action.target.className === 'list-item') {
        action.target.style.background = '#E2F1FD';
    }
  }

  function deleteBorder(action) {
    if (action.target.className === 'list-item') {
        action.target.style.background = '';
    }
  }

function dropEnd(action) {
    action.preventDefault();
   action.target.style.background = '';
    dragged.parentNode.removeChild(dragged);
    let parent = action.target.parentNode;
    if (parent.tagName === 'UL' && action.target !== parent.lastChild && action.target.className === 'list-item') {
        parent.insertBefore(dragged, action.target);
    } else {
        if (parent.tagName === 'UL' &&action.target.className === 'list-item') {
            parent.insertBefore(dragged, action.target.nextSibling);
        }
    }
}

function setCursore (action){
    event.preventDefault();
    if (action.target.className === 'list-item' && action.target.className !== 'task') {
        action.target.style.cursor = 'move';
    } else {
        if (action.target.className === 'task') {
            action.target.style.cursor = 'default';
        }
    }
}

addBtn.addEventListener('click', createTask);
ul.addEventListener('click', changeTask);
ul.addEventListener('change', checkedDisable);
ul.addEventListener('drag', dragStart);
ul.addEventListener('dragover', function (event) {
    event.preventDefault();
});
ul.addEventListener('dragenter',setBorder);
ul.addEventListener('dragleave', deleteBorder);
ul.addEventListener('drop', dropEnd);
ul.addEventListener('mouseover', setCursore);
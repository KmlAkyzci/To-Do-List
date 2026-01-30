
const form = document.querySelector('#addTaskForm');
const input = document.querySelector('#txtTaskName');
const taskList = document.querySelector('#task-list');
const btnDeleteAll = document.querySelector('#btnDeleteAll');


let items = JSON.parse(localStorage.getItem('items')) || [];

const render = () => {
    taskList.innerHTML = items.map((item, index) => `
        <li class="list-group-item list-group-item-secondary d-flex justify-content-between">
            ${item}
            <a href="#" class="delete-item float-right" onclick="deleteItem(${index})">
                <i class="fas fa-times"></i>
            </a>
        </li>`).join('');
    
    localStorage.setItem('items', JSON.stringify(items));
};

form.onsubmit = (e) => {
    const val = input.value.trim();
    
    if (!val) return alert('Please add a task.!');
    
    items.push(val); 
    input.value = ''; 
    render();       

    e.preventDefault();
    
};

window.deleteItem = (index) => {
    if (confirm('Are you sure you want to delete it?')) {
        items.splice(index, 1); 
        render();               
    }
};

btnDeleteAll.onclick = (e) => {
    e.preventDefault();
    if (items.length > 0 && confirm('Are you sure you want to clear the entire list?')) {
        items = []; 
        render();   
    }
};

render();



























































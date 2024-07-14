let newItem = document.getElementById("newItem");
let addBtn = document.getElementById("addBtn");

let editField = document.getElementById('editField');
let editBox = document.getElementById('editBox');

let editItem = null;

newItem.addEventListener('keyup', function(e) {
    if (newItem.value != "") {
        addBtn.disabled = false;
        if (e.keyCode === 13) {
            addItem();
        }
    } else {
        addBtn.disabled = true;
    }
})

addBtn.addEventListener('click', addItem);

function addItem() {
    let list = document.getElementById('list');
    let item = document.createElement('li');
    item.classList.add('listItem');
    item.innerHTML = `<p>${newItem.value}</p><button name="editBtn">Edit</button><button name="deleteBtn">Delete</button>`;
    list.appendChild(item);
    newItem.value = "";
    addBtn.disabled = true;
}

document.getElementById("list").addEventListener('click', function(e) {
    if (e.target.name === 'deleteBtn') {
        e.target.parentNode.remove();
    }
    if (e.target.name === 'editBtn') {
        editBox.style.display = 'flex';
        editField.value = e.target.parentNode.querySelector("p").innerHTML;
        editField.focus();
        editItem = e;
    }
});

document.getElementById('close').onclick = () => editBox.style.display = 'none';

document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    editItem.target.parentNode.querySelector("p").innerHTML = editField.value;
    document.getElementById('close').click();
})
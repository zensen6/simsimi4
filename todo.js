const todo = document.querySelector('.js-toDoForm'),
	input_ = todo.querySelector('input'),
	ul = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let num = 0;
let toDos = [];

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	ul.removeChild(li);
	const cleanToDos = toDos.filter(function(toDo) {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
	num = toDos.length;
}

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const content = text;
	const li = document.createElement('li');
	const span = document.createElement('span');

	const delBtn = document.createElement('button');

	delBtn.classList.add('btn');
	delBtn.classList.add('btn-info');

	const newId = toDos.length + 1;

	delBtn.style.borderRadius = '50%';
	delBtn.style.width = '25px';
	delBtn.style.height = '25px';
	delBtn.innerText = 'delete';

	delBtn.addEventListener('click', deleteToDo);
	span.innerText = content;
	span.classList.add('span-deco');
	console.log(span.style.color);
	span.style.color = 'red';
	span.style.fontWeight = 50;
	li.appendChild(delBtn);
	li.appendChild(span);

	li.id = newId; //->important!!  id="1"
	li.classList.add('li_pre');
	ul.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	};

	toDos.push(toDoObj);
	num = toDos.length;
	saveToDos();
}

function handleSubmit(event) {
	event.preventDefault();
	if (input_.value === '') alert('Thing should not be empty');
	else {
		const content = input_.value;
		if (num < 5) paintToDo(content);
		else {
			alert("can't load more than 5.");
		}
		input_.value = '';
	}
}

function something(toDo) {
	paintToDo(toDo.text);
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach(something);
	}
}

function init() {
	loadToDos();
	todo.addEventListener('submit', handleSubmit);
}
init();

const newTitle = document.querySelector('.title-input');
const newBody = document.querySelector('.body-input');
const addBtn = document.querySelector('.add-btn');
const toDoList = document.querySelector('.list-container');
const toDoCard = document.querySelector('.todo-card');

addBtn.addEventListener('click', addCard);
toDoList.addEventListener('click', deleteCard);

function Card() {
  this.id = Date.now();
  this.title = newTitle.value;
  this.body = newBody.value;
}

function addCard(e) {
  e.preventDefault();
  const newCard = new Card();
  const newArticle = document.createElement('article');
  const newToDo = 
    `<article class="todo-card" id="${newCard.id}">
      <h3 class="todo-title">${newCard.title}</h3>
      <button class="delete-btn">X</button>
      <p class="todo-body">${newCard.body}</p>
    </article>`;
  newArticle.innerHTML = newToDo;
  toDoList.prepend(newArticle);
  document.querySelector(".todo-form").reset();
}

function deleteCard(e) {
  const deleteBtn = e.target;
  const id = deleteBtn.parentNode.id;

  if (deleteBtn.className === 'delete-btn') {
    deleteBtn.parentNode.remove();
  }
}

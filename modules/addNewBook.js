import { bookCollection } from './book-collection.js';
import displayBooks from './displayBooks.js';

const addNewBook = () => {
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container', 'add-new');
  const headerText2 = document.createElement('h1');
  headerText2.classList.add('leading-text');
  headerText2.innerText = 'Add a new book';
  formContainer.appendChild(headerText2);

  const addBookForm = document.createElement('form');
  addBookForm.setAttribute('id', 'add-book-form');
  addBookForm.innerHTML = `
    <div>
      <input type='text' name='title' id='title' required placeholder='Enter Book Title'/>
    </div>
    <div>
      <input type='text' name='author' id='author' required placeholder='Enter Book Author'/>
    </div>
    <input type='submit' value='Add' class='btn submit'>
  `;

  formContainer.appendChild(addBookForm);

  addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = addBookForm.title.value;
    const author = addBookForm.author.value;
    bookCollection.addBook(title, author);
    displayBooks();
    addBookForm.title.value = '';
    addBookForm.author.value = '';
  });

  const app = document.querySelector('#app');
  app.appendChild(formContainer);
};

export default addNewBook;
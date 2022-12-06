import { bookCollection } from './book-collection.js';
import { getDataFromLocalStorage } from './local-storage.js';

const bookListContainer = document.createElement('div');
bookListContainer.classList.add('book-list');
const headerText = document.createElement('h1');
headerText.classList.add('leading-text');
headerText.innerText = 'Awesome Books';
bookListContainer.appendChild(headerText);

const noBookExistMessage = document.createElement('h1');
noBookExistMessage.classList.add('no-book');
noBookExistMessage.innerText = 'No Books are available';
noBookExistMessage.style.display = 'none';
bookListContainer.appendChild(noBookExistMessage);

const bookList = document.createElement('ul');
bookList.classList.add('books');
bookListContainer.appendChild(bookList);

const displayBooks = () => {
  bookList.innerHTML = '';
  const books = getDataFromLocalStorage('data');
  if (books.length) {
    bookList.style.display = 'block';
    books.forEach((book) => {
      const list = document.createElement('li');
      list.classList.add('book');
      list.innerHTML = `
        <p class='book-title-author'>
          <span class='book-title'> '${book.title}' </span> by
          <span class='book-author'> ${book.author} <span>
        </p>
          <button class='btn remove'> Remove </button>
        `;
      bookList.appendChild(list);
    });
    noBookExistMessage.style.display = 'none';
  } else {
    noBookExistMessage.style.display = 'block';
    bookList.style.display = 'none';
  }

  const app = document.querySelector('#app');
  app.appendChild(bookListContainer);
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      bookCollection.removeBook(index);
      displayBooks();
    });
  });
};
export default displayBooks;
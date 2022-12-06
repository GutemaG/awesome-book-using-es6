import Book from './book.js';
import { getDataFromLocalStorage } from './local-storage.js';

export default class BookCollection {
  constructor(books) {
    this.books = books;
  }

  addBook(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    this.setToLocalStorage();
  }

  removeBook(index) {
    this.books = this.books.filter((book, bookIndex) => bookIndex !== index);
    this.setToLocalStorage();
  }

  setToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.books));
  }

  getBooks() {
    return this.books;
  }
}
const bookCollection = new BookCollection(getDataFromLocalStorage('data'));
export { bookCollection };
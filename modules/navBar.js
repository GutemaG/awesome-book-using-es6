const navBar = () => {
  const navBar = document.createElement('nav');
  navBar.classList.add('nav');
  navBar.innerHTML = `  
    <ul class="nav-items">
      <li class="nav-item" >
        <a href="#" name='book-list'>Awesome books </a>
      </li>
      <li class="nav-item" >
          <a href="#" name='book-list' >List</a>
      </li>
      <li class="nav-item">
        <a href="#" name='add-new'>Add New</a>
      </li>
      <li class="nav-item">
        <a href="#" name='contact'>Contact</a>
      </li>
    </ul>
  `;
  const app = document.querySelector('#app');
  app.appendChild(navBar);
};

export default navBar;
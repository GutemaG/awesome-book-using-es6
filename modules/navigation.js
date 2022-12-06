const navigation = () => {
  const classList = ['book-list', 'add-new', 'contact'];
  document.querySelector('.add-new').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';

  const changeNavigation = (navigation) => {
    classList.forEach((c) => {
      if (c === navigation) {
        document.getElementsByClassName(navigation)[0].style.display = 'flex';
        document.title = navigation;
      } else {
        document.getElementsByClassName(c)[0].style.display = 'none';
      }
    });
  };
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((n) => {
    n.addEventListener('click', (event) => {
      const navigation = event.target.name;
      changeNavigation(navigation, n);
    });
  });
};

export default navigation;
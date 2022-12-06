const footer = () => {
  const footerContainer = document.createElement('footer');
  footerContainer.classList.add('footer');
  footerContainer.innerHTML = `
  <p>@copywrite Microverse 2022</p>
  `;
  const app = document.querySelector('#app');
  app.appendChild(footerContainer);
};
export default footer;
const contact = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact');
  contactContainer.innerHTML = `
  <h1 class="leading-text">Contact information</h1>
  <p>Do you have any question or you just say "Hello"?</p>
  <p>You can reach out to us! </p>
  <ul>
      <li>our e-mail <span>bir13gud17@gmail.com</span></li>
      <li>our phone number <span>+2519 21641744</span></li>
      <li>our Address <span>Adama, Ethiopia</span></li>
  </ul>
  `;
  const app = document.querySelector('#app');
  app.appendChild(contactContainer);
};
export default contact;
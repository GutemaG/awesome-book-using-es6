import { DateTime } from './third-party/luxon.js';

const dateTimeInfo = () => {
  const currentDateInfo = document.createElement('span');
  currentDateInfo.classList.add('current-date');
  const now = DateTime.local();
  const date = now.toLocaleString(DateTime.DATE_MED);
  const time = now.toLocaleString(DateTime.TIME_WITH_SECONDS);
  currentDateInfo.textContent = `${date} ${time}`;
  const app = document.querySelector('#app');
  app.appendChild(currentDateInfo);
};

export default dateTimeInfo;
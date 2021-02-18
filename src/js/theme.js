const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.body;

const STORAGE_KEY = 'light-theme';

const savedData = localStorage.getItem(STORAGE_KEY);

body.classList.add(Theme.LIGHT);

checkbox.addEventListener('change', onCheckboxToggle);

if (savedData === '') {
  body.classList.add(Theme.LIGHT);
}

if (savedData === 'false') {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}

const theme = {};

function onCheckboxToggle(evt) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  const isLightTheme = body.classList.contains(Theme.LIGHT);
  localStorage.setItem(STORAGE_KEY, isLightTheme);

  theme[evt.currentTarget.name] = body.classList.value;

  console.log(theme);

  const savedTheme = JSON.stringify(theme);
  localStorage.setItem('savedTheme', savedTheme);
}

import foodCards from "./templates/food-cards.hbs";
import menuItems from "./menu.json";
import './styles.css';

const listItems = document.querySelector('ul.js-menu');
const listMarkup = createList(menuItems);

listItems.insertAdjacentHTML('beforeend', listMarkup);


function createList(menuItems) {
    return foodCards(menuItems);
}


const bodyElem = document.querySelector('body');
const inputElem = document.querySelector('#theme-switch-toggle');
inputElem.addEventListener('change', clickOnInput);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function clickOnInput(e) {
    if (e.target.checked) {
        bodyElem.classList.add(`${ Theme.DARK }`);
        bodyElem.classList.remove(`${ Theme.LIGHT }`);
        localStorage.setItem('Theme', `${ Theme.DARK }`);
    }
    else {
        bodyElem.classList.add(`${ Theme.LIGHT }`);
        bodyElem.classList.remove(`${ Theme.DARK }`);
        localStorage.setItem('Theme', `${ Theme.LIGHT }`);
    }
}
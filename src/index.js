import foodCards from "./templates/food-cards.hbs";
import menuItems from "./menu.json";
import './styles.css';

const listItems = document.querySelector('ul.js-menu');
const listMarkup = createList(menuItems);

listItems.insertAdjacentHTML('beforeend', listMarkup);


function createList(menuItems) {
    return foodCards(menuItems);
}

// console.log(foodCards(menuItems));
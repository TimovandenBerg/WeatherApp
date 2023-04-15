import { apiCallAndFillCard } from './apiCall.js';

const search = document.querySelector(".container__search button");
const searchInput = document.querySelector(".container__search input");

search.addEventListener('click', () => {
    apiCallAndFillCard();
});
searchInput.addEventListener('keypress', function (e) {
    if (e.key === "Enter") 
        apiCallAndFillCard();
});
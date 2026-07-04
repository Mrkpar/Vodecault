import { topics } from "./data.js";
import { createCard } from "./ui.js";
import { categories } from "./navigation.js";

console.log("Vodecault running...");

const app = document.querySelector("#app");
const navList = document.querySelector("#nav-list");

/* -------------------------
   RENDER CARDS
--------------------------*/
function renderTopics(list) {

    app.innerHTML = "";

    list.forEach(topic => {
        const card = createCard(topic);
        app.append(card);
    });
}

/* initial render */
renderTopics(topics);

/* -------------------------
   RENDER SIDEBAR
--------------------------*/
categories.forEach(cat => {

    const li = document.createElement("li");
    li.textContent = cat;

    li.addEventListener("click", () => {

        console.log("Clicked category:", cat);

        // for now: just filter by category if available
        const filtered = topics.filter(t => t.category === cat);

        if (filtered.length > 0) {
            renderTopics(filtered);
        } else {
            renderTopics(topics);
        }
    });

    navList.append(li);
});
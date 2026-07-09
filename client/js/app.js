import { topics } from "./data.js";
import { createCard } from "./ui.js";
import { categories } from "./navigation.js";
import { renderTopics } from "./topics.js";
import { renderSidebar } from "./sidebar.js";

console.log("🚀 Vodecault initialized");

const content = document.querySelector("#content");
const navList = document.querySelector("#nav-list");

//initial render
renderTopics(content, topics, createCard);

//render sidebar
renderSidebar(navList, categories, (selectedCategory) => {
    if (selectedCategory === "All") {
        renderTopics(content, topics, createCard);
        return;
    }

    const filteredTopics = topics.filter(topic =>
        topic.category === selectedCategory
    );
    renderTopics(content, filteredTopics, createCard);
});
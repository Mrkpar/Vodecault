import { topics } from "./data.js";
import { createCard } from "./ui.js";
import { categories } from "./navigation.js";
import { renderTopics } from "./topics.js";
import { renderSidebar } from "./sidebar.js";

console.log("🚀 Vodecault initialized");

const content = document.querySelector("#content");
const navList = document.querySelector("#nav-list");
renderTopics(content, topics, createCard);
renderSidebar(navList, categories);
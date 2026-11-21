import { topics } from "./data.js";
import { javaTopics } from "./java.js";
import { ttiTopics } from "./tti.js";
import { methodTopics } from "./methods.js";
import { createCard } from "./ui.js";
import { renderTopics } from "./topics.js";
import { renderSidebar } from "./sidebar.js";
import { groupTopicsByCategory } from "./utils.js";
import { getFavorites } from "./favorites.js";
import { filterTopics } from "./search.js";

const allTopics = [...topics, ...javaTopics, ...ttiTopics, ...methodTopics];

const content = document.querySelector("#content");
const navList = document.querySelector("#nav-list");
const searchInput = document.querySelector("#search");
const groupedTopics = groupTopicsByCategory(allTopics);

let selectedCategory = "All";

function getSelectedTopics() {
  if (selectedCategory === "Favorites") {
    const favoriteIds = getFavorites();
    return allTopics.filter((topic) => favoriteIds.includes(topic.id));
  }

  if (selectedCategory === "All") {
    return allTopics;
  }

  return allTopics.filter((topic) => topic.category === selectedCategory);
}

function renderCurrentView() {
  const selectedTopics = getSelectedTopics();
  const filteredTopics = filterTopics(selectedTopics, searchInput.value);
  renderTopics(content, filteredTopics, createCard);
}

renderCurrentView();

renderSidebar(
  navList,
  groupedTopics,
  (category) => {
    selectedCategory = category;
    renderCurrentView();
  },
  (topicId) => {
    const topic = allTopics.find((item) => item.id === topicId);
    if (topic) {
      renderTopics(content, [topic], createCard);
    }
  },
);

searchInput.addEventListener("input", renderCurrentView);

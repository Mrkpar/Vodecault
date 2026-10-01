import { topics } from "./data.js";
import { javaTopics } from "./java.js";
import { createCard } from "./ui.js";
import { categories } from "./navigation.js";
import { renderTopics } from "./topics.js";
import { renderSidebar } from "./sidebar.js";
import { groupTopicsByCategory } from "./utils.js";
import { getFavorites } from "./favorites.js";

console.log(groupTopicsByCategory(topics));
console.log("🚀 Vodecault initialized");

const allTopics = [...topics, ...javaTopics];

const content = document.querySelector("#content");
const navList = document.querySelector("#nav-list");
const groupedTopics = groupTopicsByCategory(allTopics);

// initial render
renderTopics(content, allTopics, createCard);

// render sidebar
renderSidebar(
  navList,
  groupedTopics,
  (selectedCategory) => {
    if (selectedCategory === "All") {
      renderTopics(content, allTopics, createCard);
      return;
    }

    if (selectedCategory === "Favorites") {
      const favoriteIds = getFavorites();

      const favoriteTopics = allTopics.filter((topic) =>
        favoriteIds.includes(topic.id),
      );

      renderTopics(content, favoriteTopics, createCard);
      return;
    }

    const filteredTopics = allTopics.filter(
      (topic) => topic.category === selectedCategory,
    );

    renderTopics(content, filteredTopics, createCard);
  },

  // topic clicked
  (topicId) => {
    const topic = allTopics.find((t) => t.id === topicId);
    renderTopics(content, [topic], createCard);
  },
);

import { topics } from "./data.js";
import { createCard } from "./ui.js";
import { categories } from "./navigation.js";
import { renderTopics } from "./topics.js";
import { renderSidebar } from "./sidebar.js";
import { groupTopicsByCategory } from "./utils.js";
import { getFavorites } from "./favorites.js";

console.log(groupTopicsByCategory(topics));

console.log("🚀 Vodecault initialized");

const content = document.querySelector("#content");
const navList = document.querySelector("#nav-list");
const groupedTopics = groupTopicsByCategory(topics);

//initial render
renderTopics(content, topics, createCard);

//render sidebar
renderSidebar(
  navList,
  groupedTopics,
  (selectedCategory) => {
    if (selectedCategory === "All") {
      renderTopics(content, topics, createCard);
      return;
    }

    if (selectedCategory === "Favorites") {
      const favoriteIds = getFavorites();

      const favoriteTopics = topics.filter((topic) =>
        favoriteIds.includes(topic.id),
      );

      renderTopics(content, favoriteTopics, createCard);
      return;
    }

    const filteredTopics = topics.filter(
      (topic) => topic.category === selectedCategory,
    );

    renderTopics(content, filteredTopics, createCard);
  },

  //topic clicked
  (topicId) => {
    const topic = topics.find((t) => t.id === topicId);
    renderTopics(content, [topic], createCard);
  },
);

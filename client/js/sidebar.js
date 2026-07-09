export function renderSidebar(
  navList,
  groupedTopics,
  onCategoryClick,
  onTopicClick,
) {
  navList.innerHTML = "";

  //All Topics
  const allItem = document.createElement("li");
  allItem.textContent = "All Topics";
  allItem.addEventListener("click", () => {
    onCategoryClick("All");
  });
  navList.append(allItem);

  //Favorites (to be implemented)
  const favoritesItem = document.createElement("li");
  favoritesItem.textContent = "⭐ Favorites";

  favoritesItem.addEventListener("click", () => {
    onCategoryClick("Favorites");
  });
  navList.append(favoritesItem);

  Object.keys(groupedTopics).forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = category;
    categoryItem.classList.add("category");

    categoryItem.addEventListener("click", () => {
      onCategoryClick(category);
    });

    navList.append(categoryItem);

    //Topics inside category
    const topicList = document.createElement("ul");
    topicList.classList.add("topic-list");

    groupedTopics[category].forEach((topic) => {
      const topicItem = document.createElement("li");
      topicItem.textContent = topic.title;
      topicItem.classList.add("topic-item");

      topicItem.addEventListener("click", (event) => {
        event.stopPropagation(); //Dont also trigger the category click
        onTopicClick(topic.id);
      });
      topicList.append(topicItem);
    });
    navList.append(topicList);
  });
}

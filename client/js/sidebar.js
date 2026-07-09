export function renderSidebar(
  navList,
  groupedTopics,
  onCategoryClick,
  onTopicClick
) {
  navList.innerHTML = "";

  // Track active topic
  let activeTopic = null;

  // 📚 All Topics
  const allItem = document.createElement("li");
  allItem.textContent = "📚 All Topics";
  allItem.classList.add("sidebar-item");

  allItem.addEventListener("click", () => {
    clearActive();
    onCategoryClick("All");
  });

  navList.append(allItem);


  // ⭐ Favorites
  const favoritesItem = document.createElement("li");
  favoritesItem.textContent = "⭐ Favorites";
  favoritesItem.classList.add("sidebar-item");

  favoritesItem.addEventListener("click", () => {
    clearActive();
    onCategoryClick("Favorites");
  });

  navList.append(favoritesItem);


  // Categories
  Object.keys(groupedTopics).forEach((category) => {

    const categoryWrapper = document.createElement("li");
    categoryWrapper.classList.add("category-wrapper");


    const categoryButton = document.createElement("div");
    categoryButton.textContent = `▶ ${category}`;
    categoryButton.classList.add("category");


    const topicList = document.createElement("ul");
    topicList.classList.add("topic-list");

    let open = false;


    categoryButton.addEventListener("click", () => {

      open = !open;

      topicList.style.display = open ? "block" : "none";

      categoryButton.textContent =
        open ? `▼ ${category}` : `▶ ${category}`;

      onCategoryClick(category);
    });


    groupedTopics[category].forEach((topic) => {

      const topicItem = document.createElement("li");

      topicItem.textContent = topic.title;

      topicItem.classList.add("topic-item");


      topicItem.addEventListener("click", (event) => {

        event.stopPropagation();

        clearActive();

        topicItem.classList.add("active");

        activeTopic = topicItem;

        onTopicClick(topic.id);
      });


      topicList.append(topicItem);
    });


    categoryWrapper.append(
      categoryButton,
      topicList
    );


    navList.append(categoryWrapper);

  });


  function clearActive() {

    if (activeTopic) {
      activeTopic.classList.remove("active");
      activeTopic = null;
    }

  }

}
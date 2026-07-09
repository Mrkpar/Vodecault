
export function renderSidebar(navList, categories, onCategoryClick) {
  navList.innerHTML = "";

  //all topics button
  const allLi = document.createElement("li");
  allLi.textContent = "📚 All Topics";

  allLi.addEventListener("click", () => {
    onCategoryClick("All");
  });

  navList.append(allLi);

  //Category buttons
  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat;

    li.addEventListener("click", () => {
      onCategoryClick(cat);
    });

    navList.append(li);
  });
}
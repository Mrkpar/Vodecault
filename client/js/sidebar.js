export function renderSidebar(navList, categories) {
  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.textContent = cat;
    navList.append(li);
  });
}

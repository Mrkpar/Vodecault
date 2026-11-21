import { isFavorite, saveFavorite, removeFavorite } from "./favorites.js";

export function createCard(topic) {
  const card = document.createElement("article");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = topic.title;

  const meta = document.createElement("p");
  meta.classList.add("card-meta");
  meta.textContent = [topic.category, topic.difficulty]
    .filter(Boolean)
    .join(" • ");

  const favButton = document.createElement("button");
  favButton.type = "button";

  const updateFavButton = () => {
    favButton.textContent = isFavorite(topic.id)
      ? "★ Saved"
      : "☆ Add to Favorites";
  };

  updateFavButton();

  favButton.addEventListener("click", () => {
    if (isFavorite(topic.id)) {
      removeFavorite(topic.id);
    } else {
      saveFavorite(topic.id);
    }
    updateFavButton();
  });

  card.append(title, meta, favButton);

  topic.sections.forEach((section, index) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("section");

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = section.title;
    button.setAttribute("aria-expanded", "true");

    const sectionContent = document.createElement("pre");
    sectionContent.textContent = section.content;
    sectionContent.style.display = "block";

    button.addEventListener("click", () => {
      const open = sectionContent.style.display === "none";
      sectionContent.style.display = open ? "block" : "none";
      button.textContent = open ? section.title : section.title;
      button.setAttribute("aria-expanded", String(open));
    });

    wrapper.append(button, sectionContent);
    card.append(wrapper);
  });

  return card;
}

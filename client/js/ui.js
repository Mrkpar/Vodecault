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

  const isReferenceEntry = topic.difficulty === "Reference";
  const description = isReferenceEntry
    ? topic.sections.find((section) => section.title === "What it does")
    : null;

  if (description) {
    const summary = document.createElement("p");
    summary.classList.add("card-description");
    summary.textContent = description.content;
    card.append(summary);
  }

  topic.sections.forEach((section) => {
    if (isReferenceEntry && section.title === "What it does") {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("section");

    const button = document.createElement("button");
    button.type = "button";

    const sectionContent = document.createElement("pre");
    sectionContent.textContent = section.content;

    let open = !isReferenceEntry;
    button.textContent = open ? `Hide ${section.title}` : `Show ${section.title}`;
    button.setAttribute("aria-expanded", String(open));
    sectionContent.style.display = open ? "block" : "none";

    button.addEventListener("click", () => {
      open = !open;
      sectionContent.style.display = open ? "block" : "none";
      button.textContent = open ? `Hide ${section.title}` : `Show ${section.title}`;
      button.setAttribute("aria-expanded", String(open));
    });

    wrapper.append(button, sectionContent);
    card.append(wrapper);
  });

  return card;
}

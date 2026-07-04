export function createCard(topic) {

    const card = document.createElement("article");
    card.classList.add("card");

    // HEADER
    const title = document.createElement("h2");
    title.textContent = topic.title;

    const meta = document.createElement("p");
    meta.textContent = `${topic.category} • ${topic.difficulty}`;

    card.append(title, meta);

    // SECTIONS
    topic.sections.forEach(section => {

        const wrapper = document.createElement("div");
        wrapper.classList.add("section");

        const button = document.createElement("button");
        button.textContent = section.title;

        const content = document.createElement("pre");
        content.textContent = section.content;
        content.style.display = "none";

        let open = false;

        button.addEventListener("click", () => {

            open = !open;

            content.style.display = open ? "block" : "none";
            button.textContent = open
                ? `Hide ${section.title}`
                : section.title;
        });

        wrapper.append(button, content);
        card.append(wrapper);
    });

    return card;
}


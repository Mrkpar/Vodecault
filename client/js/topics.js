export function renderTopics(content, topics, createCard) {

    // ONLY clear dynamic area
    content.innerHTML = "";

    if (topics.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No results found.";
        content.append(message);
        return;
    }

    topics.forEach(topic => {
        content.append(createCard(topic));
    });
}
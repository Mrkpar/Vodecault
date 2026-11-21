export function filterTopics(topics, query) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return topics;
  }

  return topics.filter((topic) => {
    const sectionText = (topic.sections || [])
      .flatMap((section) => [section.title, section.content])
      .join(" ");

    const searchableText = [
      topic.title,
      topic.category,
      topic.difficulty,
      sectionText,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

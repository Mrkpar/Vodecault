export function groupTopicsByCategory(topics) {
  const grouped = {};
  topics.forEach((topic) => {
    if (!grouped[topic.category]) {
      grouped[topic.category] = [];
    }
    grouped[topic.category].push(topic);
  });
  return grouped;
}

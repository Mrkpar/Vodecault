const KEY = "vodecault_favorites";

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveFavorite(topicId) {
    const favs = getFavorites();

    if (!favs.includes(topicId)) {
        favs.push(topicId);
        localStorage.setItem(KEY, JSON.stringify(favs));
    }
}

export function removeFavorite(topicId) {
    const favs = getFavorites().filter(id => id !== topicId);
    localStorage.setItem(KEY, JSON.stringify(favs));
}

export function isFavorite(topicId) {
    return getFavorites().includes(topicId);
}
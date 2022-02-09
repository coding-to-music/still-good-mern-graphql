// Set item
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

// Get item
export const getLocalStorage = key => {
    return JSON.parse(localStorage.getItem(key));
}

// Delete item
export const deleteLocalStorage = key => {
    localStorage.removeItem(key);
}
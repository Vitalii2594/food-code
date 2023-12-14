export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Error saving to local storage: ", error.message);
  }
};

export const loadFromLocalStorage = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error("Error loading from local storage: ", error.message);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export default {
  saveToLocalStorage,
  loadFromLocalStorage,
  removeFromLocalStorage,
};

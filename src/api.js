// api.js

export const fetchCats = async () => {
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?size=full");
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching cat data:", error);
    return null;
  }
};

export const fetchDogs = async () => {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/images/search?size=full");
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dog data:", error);
    return null;
  }
};

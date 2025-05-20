/**
 * Handles the logic for displaying band details once the DOM is fully loaded.
 * - Extracts the band ID from the URL.
 * - Fetches band data from the JSON file.
 * - Updates the DOM with the band's details if found.
 * - Displays an error message if the band is not found or data fails to load.
 */
document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    document.getElementById("band-details").innerText = "Группа не найдена.";
    return;
  }

  try {
    const response = await fetch("./../bands.json");
    const bands = await response.json();

    const band = bands.find((b) => b.id.toString() === id);

    if (!band) {
      document.getElementById("band-details").innerText = "Группа не найдена.";
      return;
    }

    document.getElementById("band-name").textContent = band.name;
    document.getElementById("band-image").src = band.image;
    document.getElementById("band-image").alt = band.name;
    document.getElementById("band-years").textContent = `Годы активности: ${band.years}`;
    document.getElementById("band-history").textContent = band.history;

    const tracksList = document.getElementById("band-songs");
    band.songs.forEach((track) => {
      const li = document.createElement("li");

      const text = document.createTextNode(track + " ");
      li.appendChild(text);

      const button = document.createElement("button");
      button.className = "add-favorites-button";
      button.textContent = "Добавить в избранное";

      button.addEventListener("click", () => {
        addToFavorites({ title: track, band: band.name });
      });

      li.appendChild(button);
      tracksList.appendChild(li);
    });

  } catch (error) {
    console.error("Ошибка загрузки:", error);
    document.getElementById("band-details").innerText = "Ошибка загрузки данных.";
  }
});

/**
 * Adds a track to the list of favorites in localStorage.
 *
 * @param {Object} track - The track object to add.
 * @param {string} track.title - The title of the track.
 * @param {string} track.band - The name of the band.
 */
function addToFavorites(track) {
  const key = "favoriteSongs";
  const favorites = JSON.parse(localStorage.getItem(key)) || [];

  const exists = favorites.some(
    (fav) => fav.title === track.title && fav.band === track.band
  );

  if (!exists) {
    favorites.push(track);
    localStorage.setItem(key, JSON.stringify(favorites));
    alert(`"${track.title}" by "${track.band}" has been added to favorites`);
  } else {
    alert(`"${track.title}" is already in favorites`);
  }
}

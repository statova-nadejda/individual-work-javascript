/**
 * Handles rendering of favorite tracks once the DOM is fully loaded.
 * - Retrieves the list of favorite songs from localStorage.
 * - Displays a message if no favorites are found.
 * - Creates a list of favorite tracks with "Delete" buttons.
 * - Updates localStorage and refreshes the page when a track is removed.
 */
document.addEventListener("DOMContentLoaded", () => {
  const favoritesList = document.getElementById("favorites-list");
  const favorites = JSON.parse(localStorage.getItem("favoriteSongs")) || [];

  if (favorites.length === 0) {
    favoritesList.innerHTML = "<p>Вы пока ничего не добавили в избарнные треки</p>";
    return;
  }

  favorites.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${track.title} — ${track.band} `;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    
    /**
     * Handles removal of a favorite track.
     * - Removes the track from the array.
     * - Updates localStorage.
     * - Reloads the page to reflect changes.
     */
    deleteButton.addEventListener("click", () => {
      favorites.splice(index, 1);
      localStorage.setItem("favoriteSongs", JSON.stringify(favorites));
      location.reload(); 
    });

    li.appendChild(deleteButton);
    favoritesList.appendChild(li);
  });
});

/**
 * Represents a music band.
 */
export class Band {
  /**
   * Creates a new Band instance.
   * @param {Object} params - The band data.
   * @param {number|string} params.id - The unique identifier of the band.
   * @param {string} params.name - The name of the band.
   * @param {string} params.years - The active years of the band.
   * @param {string} params.history - The history or description of the band.
   * @param {string} params.image - The URL of the band's image.
   * @param {string[]} params.tracks - A list of the band's tracks.
   */
  constructor({ id, name, years, history, image, tracks }) {
    this.id = id;
    this.name = name;
    this.years = years;
    this.history = history;
    this.image = image;
    this.tracks = tracks;
  }

  /**
   * Creates an HTML card element that visually represents the band.
   * @returns {HTMLDivElement} A div element containing the band's card.
   */
  createCard() {
    const card = document.createElement('div');
    card.className = 'band-card';
    card.innerHTML = `
      <img src="${this.image}" alt="${this.name}">
      <div class="band-content">
        <h3>${this.name}</h3>
        <div class="button-wrapper">
          <button type="button" class="learn-more-button">Learn more</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      window.location.href = `band.html?id=${this.id}`;
    });
    return card;
  }
}

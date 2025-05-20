import { Band } from './Band.js'; 

fetch('./../bands.json')
  .then(res => res.json())
  .then(bandsData => {
    const container = document.getElementById('bands-container');
    bandsData.forEach(bandObj => {
      const band = new Band(bandObj); 
      container.appendChild(band.createCard()); 
    });
  });

import { Band } from "./Band.js";

const getData = await fetch("./../bands.json");
const formatData = await getData.json();
const container = document.getElementById("bands-container");
formatData.forEach((bandObj) => {
  const band = new Band(bandObj);
  container.appendChild(band.createCard());
});

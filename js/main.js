import {
  createUser,
  addUserToLocalStorage,
  checkUserExistance,
} from "./User.js";

const modal = document.querySelector("#modal");
const btn = document.querySelector("#get-random-fact-button");
const close = document.querySelector(".close");

btn.addEventListener("click", async () => {
  modal.style.display = "block";
  const data = await fetch("./../facts.json");
  let formatData = await data.json();
  let factsArray = formatData.map((element) => element.fact);
  let randomElement = factsArray[Math.floor(Math.random() * factsArray.length)];
  document.querySelector("#random-fact-field").innerHTML = `${randomElement}`;
});

close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const addUserBtn = document.getElementById("subscribe-button");
addUserBtn.addEventListener("click", () => {
  const newUser = createUser();
  checkUserExistance(newUser);
});

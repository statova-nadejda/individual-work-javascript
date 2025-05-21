export class User {
  constructor(name, email, favouriteBand) {
    this.name = name;
    this.email = email;
    this.favouriteBand = favouriteBand;
  }
}

export function getUserInfo() {
  return {
    name: document.getElementById("user-name").value,
    email: document.getElementById("user-email").value,
    favouriteBand: document.getElementById("user-favourite-group").value,
  };
}

export function createUser() {
  const { name, email, favouriteBand } = getUserInfo();

  const newUser = new User(name, email, favouriteBand);
  return newUser;
}

export function getUsersFromLocalStorage() {
  const users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  } else {
    console.warn("В localStorage нет данных под ключом users");
    return [];
  }
}

export function addUserToLocalStorage(newUser) {
  const users = getUsersFromLocalStorage();
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
}

export function checkUserExistance(newUser) {
  const users = getUsersFromLocalStorage();
  const existingUser = users.find((user) =>
user.name === newUser.name);
  if (existingUser) {
    alert("Пользователь с таким именем уже есть");
  } else {
    addUserToLocalStorage(newUser);
    alert("Подписка на новости успешно оформлена");
  }
}

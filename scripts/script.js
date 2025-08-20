/* import { cars } from "../data/data.js";

const items = document.querySelector(".item");
let current = 0;

// Seletores
const titleEl = document.getElementById("car-title");
const subtitleEl = document.getElementById("car-subtitle");
const descEl = document.getElementById("car-description");
const imgEl = document.getElementById("car-img");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

function showCar(index) {
  titleEl.textContent = cars[index].title;
  subtitleEl.textContent = cars[index].subtitle;
  descEl.textContent = cars[index].description;
  imgEl.src = cars[index].image;
  items[index].classList.add("active");
  items.forEach(item => item.classList.remove("active"));
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= cars.length) current = 0;
  showCar(current);
});

backBtn.addEventListener("click", () => {
  current--; 
  if (current < 0) current = cars.length - 1;
  showCar(current);
});

showCar(current); */

import { cars } from "../data/data.js";

const listEl = document.querySelector(".list");
let current = 0;



// Cria os itens dinamicamente
cars.forEach((car, index) => {
  const item = document.createElement("div");
  item.classList.add("item");
  if(index === 0) item.classList.add("active"); // primeiro carro ativo

  item.innerHTML = `
    <div class="car-img">
      <img src="${car.image}" alt="carro ${car.title}" />
    </div>
    <div class="content">
      <h4 class="car-information">${car.subtitle}</h4>
      <h2>${car.title}</h2>
      <p class="description">${car.description}</p>
      <button class="information">Saiba Mais</button>
    </div>
  `;

  listEl.appendChild(item);
});

const items = document.querySelectorAll(".item");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

function showCar(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

nextBtn.addEventListener("click", () => {
  current++;
  if (current >= cars.length) current = 0;
  showCar(current);
});

backBtn.addEventListener("click", () => {
  current--;
  if (current < 0) current = cars.length - 1;
  showCar(current);
});

showCar(current);

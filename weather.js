const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

//api related constant

const BASE = "https://api.weatherstack.com";
const KEY = "a92792468861d19a63b32dccffb1550b";

btn.addEventListener("click", f => {
  fetch(`${BASE})/current?access_key=${KEY}&query=dhaka`)
    .then(response => response.json())
    .then(forecast => {
      console.log(forecast);
    })
})
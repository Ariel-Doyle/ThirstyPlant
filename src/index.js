import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import PlantService from './plant_service';
import TimerService from './timer_service';

// Business Logic

async function getPlantInfo(plant) {
  const response = await PlantService.getPlantInfo(plant);
  const div = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h5');
  const water = document.createElement('p');
  const light = document.createElement('p');
  const show = document.querySelector(`#showResponse`);
  div.classList = 'card';
  image.classList = 'card-image';
  name.innerText = response[0].common;
  water.innerHTML = `<strong>Watering: </strong>${response[0].watering}`;
  light.innerHTML = `<strong>Light Needs: </strong>${response[0].ideallight}`;

  div.appendChild(image);
  div.appendChild(name);
  div.appendChild(water);
  div.appendChild(light);
  show.appendChild(div);
}

function handleFormSubmission(event) {
  let plant = document.querySelector('#plant').value;
  event.preventDefault();
  getPlantInfo(plant);
}

window.addEventListener("load", function () {
  document.querySelector("form").addEventListener("submit", handleFormSubmission);
  document.querySelector("reminder-form").addEventListener("submit", createReminder);
});


// UI Logic

function reminderMsg(days) {
  let msg = `Reminder to water your plants! You last watered ${days} days ago.`;
  //return the message in a modal popup box using css
  return msg;
}

function createReminder() {
  let days = document.querySelector("#days").value;
  let time = days * 86400000;
  setTimeout(reminderMsg(days), time);
}
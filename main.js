// console.log('main.js is connected!');
// function place() {



// };

window.onload  = function() {
const  button = document.querySelector('button');
button.addEventListener('click', useInput);

event.preventDefault();
};

function useInput(e){
  e.preventDefault();
  let address = document.querySelector('input').value;



    fetch (`https://api.openweathermap.org/data/2.5/weather?zip=${address}&APPID=86de3a54bdf74fd337dd1e2da5314b5e`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      getData(response);
    })
    .catch((error) => {
      console.log(error);
    })

};










// A function getData is created in order to parse the results form the previous function.
const getData = function(data){
    const temp = (data.main.temp - 273.15) * 9/5 + 32;
    const tempF = Math.round(temp);
    const min = (data.main.temp_min - 273.15) * 9/5 + 32;
    const minF = Math.round(min);
    const max = (data.main.temp_max - 273.15) * 9/5 + 32;
    const maxF = Math.round(max);
    const city = data.name;
    const sun_cloud = data.weather[0].description;
  manipulateDom(tempF, minF, maxF, city, sun_cloud);


};






// Here we are going to actually put the data parsed, and put it on the page
const manipulateDom =function(tempF, minF, maxF, city, sun_cloud){
  // document.getElementById('left-wrapper').innerText = temp;
const degreeId = document.getElementById('degrees');
const cityId = document.getElementById('city');
const maxId = document.getElementById('max');
const minId = document.getElementById('min');
const sun_cloudId = document.getElementById('sun-cloud');

  degreeId.innerText = tempF;
  cityId.innerText = city;
  maxId.innerText = maxF;
  minId.innerText = minF;
  sun_cloudId.innerText = sun_cloud;


  if (tempF > 90) {
    return degreeId.style.color = "red";
  }else if(tempF < 40){
    return degreeId.style.color = "blue";
  }



};







// Made a function called zipcode which allows for the input bar to put zipcode
// and it should return the city data.


//
// function addEventListener() {
//   event.preventDefault();
//   const cityR = document.getElementById('city');
//   document.getElementById('city').addEventListener('click', (e) => {
//     cityR.innerText = e.target.dataset.name;
//   })
// }





// // Here's an overview of the steps you'll follow to get your app to work...
//
// STEPS
//
// 1. when the page loads
//   - add an event listener to the button
// const button = document.getElementById('button');
// button.addEventListener('click', activate);



// 2. When the button is clicked
//   - grab the input
//   - store the value
//   - make an API request based on the input value
// 3. When the API response is returned
//   - grab all the appropriate DOM elements
//   - append the data to the DOM
//
// */

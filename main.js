const inputTxt = document.querySelector(".inputTxt");
let button = document.querySelector(".btn");
const showData = document.querySelector(".showData");


const API_Key = "1469b7429b6c1a6f20b4425dfcc465d3";

button.addEventListener("click", () => {

    const cityInput = inputTxt.value;
    // console.log("cityInput");

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_Key}`)

        .then(res => res.json())
        .then(data => {

            inputTxt.value = " ";

            showData.innerHTML = `
                              <ul>
                                <li class="desc">${data.weather[0].description}</li>
                                 <li class="city">${data.name}</li>
                                 <li class="temp">${data.main.temp}°c</li>
                            </ul>
                                  `;


 
        });

});

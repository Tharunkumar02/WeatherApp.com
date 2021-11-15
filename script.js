let loc = document.getElementById("location");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconFile;

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    let search = searchInput.value;
    getWeather(search);
});

const getWeather = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=91cedb565e232c816b163738a14ed595`,
        {mode : "cors"});

        const data = await response.json();
        console.log(data);
        const {name} = data;
        const {feels_like} = data.main;
        const {id, main} = data.weather[0];
        loc.textContent = name;
        climate.textContent = main;
        tempValue.textContent = Math.round(feels_like-273.15);

        if (id >= 200 && id <= 232) {
            tempIcon.src = "icons/storm.svg"
        }
        else if (id >= 300 && id <= 321) {
            tempIcon.src = "icons/cloud.svg"
        }
        else if (id >= 500 && id <= 531) {
            tempIcon.src = "icons/rain.svg"
        }
        else if (id >= 600 && id <= 622) {
            tempIcon.src = "icons/snow.svg"
        }
        else if (id >= 701 && id <= 781) {
            tempIcon.src = "icons/haze.svg"
        }
        else if (id == 800) {
            tempIcon.src = "icons/clear.svg"
        }
        console.log(data);
    }
    catch (error) {
        alert("City not found");
    }
}


// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     const proxy = "https://cors-anywhere.herokuapp.com/";

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;

//             const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={91cedb565e232c816b163738a14ed595}`;
//             fetch(api).then(response => {
//                 return response.json();
//             })

//                 .then(data => {
//                     const { name } = data;
//                     const { feels_like } = data.main;
//                     const { id, main } = data.weather[0];

//                     loc.textContent = name;
//                     climate.textContent = main;
//                     tempValue.textContent = Math.round(feels_like - 273.15);

//                     if (id >= 200 && id <= 232) {
//                         tempIcon.src = "icons/storm.svg"
//                     }
//                     else if (id >= 300 && id <= 321) {
//                         tempIcon.src = "icons/cloud.svg"
//                     }
//                     else if (id >= 500 && id <= 531) {
//                         tempIcon.src = "icons/rain.svg"
//                     }
//                     else if (id >= 600 && id <= 622) {
//                         tempIcon.src = "icons/snow.svg"
//                     }
//                     else if (id >= 701 && id <= 781) {
//                         tempIcon.src = "icons/haze.svg"
//                     }
//                     else if (id == 800) {
//                         tempIcon.src = "icons/clear.svg"
//                     }
//                     console.log(data);
//                 })

//         })
//     }
// })


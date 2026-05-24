const searchInput = document.querySelector("#search");
const cityEl = document.querySelector("#city");
const tempEl = document.querySelector("#temp");
const humidityEl = document.querySelector("#humidity");
const windEl = document.querySelector("#wind");

document.getElementById("btn").addEventListener("click", async (event) => {
  event.preventDefault();

  document.getElementById("btn").addEventListener("click", async (event) => {
  event.preventDefault();

  document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
});

  })
  const query = searchInput.value.trim();

  // 🚨 check if empty
  if (!query) {
    alert("Please enter a city name");
    return;
  }

  const url =  `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?city=${query}&units=metric&lang=en`;

//  const url = `https://open-weather13.p.rapidapi.com/city?city=${query}&lang=EN`;


  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "09dcdde87fmshdbbcd3c210e1ac5p1a3909jsn8af19301c20b",
      "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
    },
  };
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();

   

    // 🚨 check API error
    if (data.cod === "400") {
      alert(data.message);
      return;
    }

    displayWeather(data);

  } catch (error) {
    console.error("error:", error);
  }
});

function displayWeather(data) {
  // Update UI directly (no forEach needed)
 
  cityEl.textContent = data.city_name;
  tempEl.textContent = `${data.data[0].temp}°C`;
  humidityEl.textContent = `Humidity: ${data.data[0].rh}%`;
 windEl.textContent = `Wind: ${data.data[0].wind_spd} km/h`;
 
}

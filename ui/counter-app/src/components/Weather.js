import { useState, useEffect } from "react";
import axios from "axios";
import "../css/Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              q: "İstanbul",
              units: "metric",
              appid: "5d0f7e819ba48d52e02000b240f9d3e5",
              lang: "tr",
            },
          }
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  if (!weatherData) {
    return <p style={{ textAlign: "center" }}>Yükleniyor...</p>;
  }

  return (
    <div className="weather-container">
      <h1 className="weather-title">{weatherData.name} Hava Durumu</h1>
      <h2 className="weather-temp">{Math.round(weatherData.main.temp)}°C</h2>
      <p className="weather-desc">{weatherData.weather[0].description}</p>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
    </div>
  );
}

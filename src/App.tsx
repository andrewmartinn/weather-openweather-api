import { Box, Container } from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherAPIResponse } from "./types";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherAPIResponse>();
  const coldWeatherBg = {
    backgroundColor: "#0093E9",
    backgroundImage: "linearGradient(160deg, #0093E9 0%, #80D0C7 100%)",
  };

  useEffect(() => {
    const fetchWeather = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
        );
        const data: WeatherAPIResponse = await response.json();
        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.log("Error fetching weather data!", error);
      }
    };
    if (searchTerm) {
      fetchWeather();
    }
  }, [searchTerm]);

  return (
    <Box w={"100%"} h={"100vh"} style={coldWeatherBg}>
      <Header />
      <Container maxW={"4xl"} centerContent pt={"3rem"}>
        <SearchBox handleSearch={setSearchTerm} />
        {weatherData && <WeatherDisplay weather={weatherData} />}
      </Container>
    </Box>
  );
}

export default App;

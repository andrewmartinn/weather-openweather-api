import { Box, Container } from "@chakra-ui/react";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import useFetch from "./hooks/useFetch";
import Loading from "./components/Loading";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data: weatherData, loading } = useFetch(
    searchTerm
      ? `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      : ""
  );
  const temprature = weatherData?.main.temp ?? 0;

  return (
    <Box
      w={"100%"}
      h={"100%"}
      minH={"100vh"}
      bg={temprature < 25 ? "#0093E9" : "#FBAB7E"}
    >
      <Header />
      <Container
        maxW={"4xl"}
        centerContent
        pt={{ base: "3rem", md: "0" }}
        py={{ base: "6" }}
      >
        <SearchBox handleSearch={setSearchTerm} />
        {loading && <Loading />}
        {weatherData && !loading && <WeatherDisplay weather={weatherData} />}
      </Container>
    </Box>
  );
}

export default App;

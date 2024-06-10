import { useState } from "react";
import { Box, Card, Divider, Flex, Text } from "@chakra-ui/react";
import { WeatherAPIResponse } from "../types";
import useUnixToDate from "../hooks/useUnixToDate";
import TempratureUnitToggle from "./TempratureUnitToggle";
import WeatherDetailedStats from "./WeatherDetailedStats";
import WeatherSummary from "./WeatherSummary";

interface WeatherDisplayProps {
  weather: WeatherAPIResponse;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const { date } = useUnixToDate(weather.dt);
  const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);

  const handleUnitToggle = (isFahrenheitActive: boolean) => {
    setIsFahrenheit(isFahrenheitActive);
  };

  return (
    <Box w={"100%"}>
      <Flex justifyContent={"space-between"} alignItems={"center"} pb={"2"}>
        <Text fontSize={"4xl"} color={"#fff"} fontWeight={"bold"}>
          {weather.name}, {weather.sys.country}
        </Text>
        <TempratureUnitToggle
          isFahrenheit={isFahrenheit}
          handleUnitToggle={handleUnitToggle}
        />
      </Flex>
      <Card bg={"white"} w={"100%"} borderRadius={"md"} h={"450px"}>
        <Flex
          px={7}
          py={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text textTransform={"uppercase"} color={"#BBBBBB"}>
            Current Weather Forecast
          </Text>
          <Text color={"#444"}>{date}</Text>
        </Flex>
        <Divider borderColor={"#b4b4b4"} />
        <Box px={7} py={7}>
          <WeatherSummary weather={weather} isFahrenheit={isFahrenheit} />
          <WeatherDetailedStats weather={weather} isFahrenheit={isFahrenheit} />
        </Box>
      </Card>
    </Box>
  );
};
export default WeatherDisplay;

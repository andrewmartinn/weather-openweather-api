import { Box, Flex, Text } from "@chakra-ui/react";
import WeatherIcon from "./WeatherIcon";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { WeatherAPIResponse } from "../types";

interface WeatherSummaryProps {
  weather: WeatherAPIResponse;
  isFahrenheit: boolean;
}

const WeatherSummary: React.FC<WeatherSummaryProps> = ({
  weather,
  isFahrenheit,
}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"space-between"}>
      <Flex alignItems={"center"} gap={"8"}>
        <WeatherIcon weather={weather} />
        <Box>
          <Text fontSize={"5xl"} color={"#444"}>
            {isFahrenheit
              ? `${Math.round(weather.main.temp * 9) / 5 + 32} °F`
              : `${Math.round(weather.main.temp)} °C`}
          </Text>
          <Text fontSize={"xl"} color={"#444"}>
            {weather.weather[0].main}
          </Text>
        </Box>
      </Flex>
      <Box>
        <Flex
          gap={"10rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"4"}
        >
          <Text display={"flex"} alignItems={"center"} gap={"2"} color={"#444"}>
            <FaTemperatureLow size={"20px"} />
            Minimum Temparature
          </Text>
          <Text color={"#444"}>
            {isFahrenheit
              ? `${Math.round(weather.main.temp_min * 9) / 5 + 32} °F`
              : `${Math.round(weather.main.temp_min)} °C`}
          </Text>
        </Flex>

        <Flex
          gap={"10rem"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text display={"flex"} alignItems={"center"} gap={"2"} color={"#444"}>
            <FaTemperatureHigh size={"20px"} />
            Maximum Temparature
          </Text>
          <Text color={"#444"}>
            {isFahrenheit
              ? `${Math.round(weather.main.temp_max * 9) / 5 + 32} °F`
              : `${Math.round(weather.main.temp_max)} °C`}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
export default WeatherSummary;

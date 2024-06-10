import { Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { FaCloud, FaTemperatureLow, FaWind } from "react-icons/fa";
import { LuWaves } from "react-icons/lu";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { WeatherAPIResponse } from "../types";

interface WeatherDetailedStatsProps {
  weather: WeatherAPIResponse;
  isFahrenheit: boolean;
}

const WeatherDetailedStats: React.FC<WeatherDetailedStatsProps> = ({
  weather,
  isFahrenheit,
}) => {
  const windSpeed = (weather.wind.speed * 3.6).toFixed(1);
  return (
    <Box pt={"4rem"}>
      <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap={"10"}>
        <Box>
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <FaTemperatureLow size={"20px"} />
              Real Feel
            </Text>
            <Text color={"#444"}>
              {isFahrenheit
                ? `${Math.round(weather.main.feels_like * 9) / 5 + 32} °F`
                : `${Math.round(weather.main.feels_like)} °C`}
            </Text>
          </Flex>
          <Divider />
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
            mt={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <FaWind size={"20px"} />
              Wind
            </Text>
            <Text color={"#444"}>{windSpeed} km/h</Text>
          </Flex>
          <Divider />
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
            mt={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <MdOutlineVisibility size={"20px"} />
              Visiblity
            </Text>
            <Text color={"#444"}>{weather.visibility} m</Text>
          </Flex>
        </Box>
        <Box>
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <LuWaves size={"20px"} />
              Pressure
            </Text>
            <Text color={"#444"}>{weather.main.pressure} hPa</Text>
          </Flex>
          <Divider />
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
            mt={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <WiHumidity size={"20px"} />
              Humidity
            </Text>
            <Text color={"#444"}>{weather.main.humidity} %</Text>
          </Flex>
          <Divider />
          <Flex
            gap={"10rem"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={"4"}
            mt={"4"}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              gap={"2"}
              color={"#444"}
            >
              <FaCloud size={"20px"} />
              Clouds
            </Text>
            <Text color={"#444"}>{weather.clouds.all}%</Text>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};
export default WeatherDetailedStats;

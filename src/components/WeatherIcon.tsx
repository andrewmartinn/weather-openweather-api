import { GoSun } from "react-icons/go";
import { IconMap, WeatherAPIResponse } from "../types";
import { FaCloud, FaCloudRain } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";

interface WeatherIconProps {
  weather: WeatherAPIResponse;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
  const weatherIconMap: IconMap = {
    "clear sky": <GoSun size={"100px"} color="orange" />,
    "few clouds": <FaCloud size={"100px"} color="#2196f3" />,
    "scattered clouds": <FaCloud size={"100px"} color="#2196f3" />,
    "broken clouds": <FaCloud size={"100px"} color="#2196f3" />,
    "overcast clouds": <FaCloud size={"100px"} color="#2196f3" />,
    "light rain": <FaCloudRain size={"100px"} color="#2196f3" />,
    "moderate rain": <FaCloudRain size={"100px"} color="#2196f3" />,
    mist: <IoIosWater size={"100px"} color="#2196f3" />,
  };
  const iconComponent = weatherIconMap[weather.weather[0].description];
  return <>{iconComponent || <GoSun size={"100px"} color="orange" />}</>;
};
export default WeatherIcon;

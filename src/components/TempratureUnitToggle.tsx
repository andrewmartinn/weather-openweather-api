import { Box, Flex, Text } from "@chakra-ui/react";

interface TemperatureUnitToggleProps {
  isFahrenheit: boolean;
  handleUnitToggle: (isFahrenheitActive: boolean) => void;
}

const TemperatureUnitToggle: React.FC<TemperatureUnitToggleProps> = ({
  isFahrenheit,
  handleUnitToggle,
}) => {
  return (
    <Box
      display={"inline-block"}
      position={"relative"}
      height={"44px"}
      w={"198px"}
      bg={"white"}
      borderRadius={"md"}
      p={"2"}
    >
      <Flex
        align={"center"}
        justifyContent={"space-between"}
        height={"100%"}
        px={"10px"}
        zIndex={"4"}
      >
        <Text
          fontSize={"sm"}
          color={"gray.500"}
          cursor={"pointer"}
          onClick={() => handleUnitToggle(!isFahrenheit)}
        >
          Celsius
        </Text>
        <Text
          fontSize={"sm"}
          color={"gray.500"}
          cursor={"pointer"}
          onClick={() => handleUnitToggle(!isFahrenheit)}
        >
          Fahrenheit
        </Text>
      </Flex>
      <Box
        position={"absolute"}
        top={"4px"}
        left={isFahrenheit ? "94px" : "5px"}
        width={isFahrenheit ? "95px" : "80px"}
        height={"35px"}
        bg={"rgba(0, 0, 0, 0.2)"}
        borderRadius={"md"}
        transition={"left 0.3s ease-in-out"}
        zIndex={"1"}
      />
    </Box>
  );
};

export default TemperatureUnitToggle;

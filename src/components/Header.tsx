import { Flex, Text } from "@chakra-ui/react";
import { FaCloud } from "react-icons/fa";

const Header = () => {
  return (
    <Flex alignItems={"center"} gap={"2"} p={"6"} justifyContent={"center"}>
      <Text fontSize={"3xl"} fontWeight={"bold"} color={"white"}>
        React Weather
      </Text>
      <FaCloud color={"white"} size={"2rem"} />
    </Flex>
  );
};
export default Header;

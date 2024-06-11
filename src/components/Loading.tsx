import { Box, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box mt={"5rem"}>
      <Spinner color={"white"} thickness={"4px"} speed={"0.65s"} size={"xl"} />
    </Box>
  );
};
export default Loading;

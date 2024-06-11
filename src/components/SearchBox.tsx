import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

interface SearchBoxProps {
  handleSearch: (text: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ handleSearch }) => {
  const [text, setText] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text) {
      handleSearch(text);
      setText("");
    }
  };
  return (
    <Box py={"2rem"} w={"80%"}>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            pr={"2"}
            type="text"
            placeholder={"Enter city/state..."}
            background={"white"}
            border={"none"}
            outline={"none"}
            focusBorderColor={"transparent"}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <InputRightElement>
            <IconButton aria-label="search-button" icon={<IoSearch />} />
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};
export default SearchBox;

import logo from "../assetts/logo.png";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { Search2Icon, ChevronDownIcon, BellIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#0D2847] h-12 flex items-center justify-between">
      <img className="h-[35px] w-[90px] pl-3 " src={logo} alt="logo" />
      <Link to="/orders">
        <div className="cursor-pointer">
          <InputGroup>
            <Input
              placeholder="Search"
              width="250px"
              height="25px"
              backgroundColor="#FFFFFF2C"
            />
            <InputRightElement>
              <Search2Icon boxSize={6} paddingBottom={3} paddingLeft={3} color="#FFFFFFAF" />
            </InputRightElement>
          </InputGroup>
        </div>
      </Link>
      <div className="flex items-center space-x-2 mr-5">
        <div style={{ position: "relative", display: "inline-block" }}>
          <BellIcon boxSize={5} color="white" />
          <Icon
            className="ml-[-12px] absolute"
            viewBox="0 0 200 200"
            color="red.500"
          >
            <path
              fill="currentColor"
              d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
            />
          </Icon>
        </div>
        <WrapItem>
          <Avatar
            name="Kent Dodds"
            size="sm"
            src="https://bit.ly/kent-c-dodds"
          />
        </WrapItem>
        <p
          className="font-Lato
         text-white
         "
        >
          Thomas Dean
        </p>
        <IconButton
          colorScheme="outline"
          fontSize="20px"
          aria-label="Search profile"
          icon={<ChevronDownIcon />}
        />
      </div>
    </div>
  );
};

export default Header;

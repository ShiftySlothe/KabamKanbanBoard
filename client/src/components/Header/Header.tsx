import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import logoImg from "../../images/logo/Kabam-logos_black.png";
import HeaderAuthButtons from "./HeaderAuthButtons";

const Header = () => {
  return (
    <>
      <Flex
        position="static"
        h="10vh"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <Img src={logoImg} boxSize="10vh"></Img>
          <Heading>Kanbam</Heading>
        </Flex>
        <HeaderAuthButtons />
      </Flex>
    </>
  );
};

export default Header;

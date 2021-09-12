import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import logoImg from "../images/logo/Kabam-logos_black.png";
import AuthModal from "./Auth/AuthModal";

const Header = () => {
  const {
    isOpen: isOpenSignUpModal,
    onOpen: openSignUpModal,
    onClose: closeSignUpModal,
  } = useDisclosure();

  const {
    isOpen: isOpenLogInModal,
    onOpen: openLogInModal,
    onClose: closeLogInModal,
  } = useDisclosure();
  return (
    <>
      <Flex
        position="static"
        h="10vh"
        alignItems="center"
        justifyContent="space-between"
      >
        <Img src={logoImg} boxSize={["20vh", "25vh"]}></Img>

        <Box pr={[0, 4]}>
          <Button onClick={openLogInModal} m={1} fontSize={["sm", "md"]}>
            Log in
          </Button>
          <Button onClick={openSignUpModal} m={1} fontSize={["sm", "md"]}>
            Sign up!
          </Button>
        </Box>
      </Flex>

      <AuthModal isOpen={isOpenSignUpModal} onClose={closeSignUpModal} />
      <AuthModal isLogIn isOpen={isOpenLogInModal} onClose={closeLogInModal} />
    </>
  );
};

export default Header;

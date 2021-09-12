import React from "react";
import {
  Flex,
  Container,
  Heading,
  Text,
  Box,
  Divider,
  Center,
} from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/modal";
import { Img } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import logoImg from "./images/logo/Kabam-logos_white.png";
import landingImg from "./images/19198999.jpg";
import googleLogo from "./images/g-logo.png";
import { Link as RouterLink } from "react-router-dom";
const Landing: React.FC = () => {
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
      <Box>
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
        <Flex
          Flex
          h="90vh"
          bg="white"
          alignItems="center"
          justifyContent="center"
        >
          <Container pt={[4, 0]}>
            <Heading fontSize="6xl">
              Kanbam helps you move work forward.
            </Heading>
            <Text fontSize="xl" p={2}>
              Manage projects, and tasks. Made using Typescript React, Mongo,
              Express and Node.
            </Text>
            <Flex pt={2}>
              <Button onClick={openSignUpModal} width="66%">
                Sign up, it&apos;s free!
              </Button>
            </Flex>
          </Container>
          <Img src={landingImg} width="50%" display={["none", "none,"]}></Img>
        </Flex>
      </Box>

      <AuthModal isOpen={isOpenSignUpModal} onClose={closeSignUpModal} />
      <AuthModal isLogIn isOpen={isOpenLogInModal} onClose={closeLogInModal} />
    </>
  );
};

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLogIn?: boolean;
}
const AuthModal = (props: AuthModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p={4}>
          <Flex justifyContent="center">
            <ModalHeader justifyContent="center">
              <Center>
                <Heading mb={2}>{props.isLogIn ? "Log in" : "Sign up"}</Heading>
              </Center>
              <Divider width={"350px"} />
            </ModalHeader>
          </Flex>
          <ModalBody>
            {props.isLogIn ? (
              <GoogleAuthButton isLogIn />
            ) : (
              <GoogleAuthButton />
            )}
          </ModalBody>

          <ModalFooter justifyContent="centesr">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

interface GoogleAuthButtonProps {
  isLogIn?: boolean;
}
export const GoogleAuthButton = (props: GoogleAuthButtonProps) => {
  return (
    <Box>
      <Link as={"a"} href="/auth/google">
        <Container
          display="flex"
          boxShadow="1px 4px 5px 0px rgba(0,0,0,0.57)"
          p={2}
          borderRadius="sm"
          maxWidth="300px"
          alignItems="center"
        >
          <Img src={googleLogo} boxSize={"25px"} m={1}></Img>
          <Text ml={4}>
            {props.isLogIn ? "Login with Google" : "Sign up with Google"}
          </Text>
        </Container>
      </Link>
    </Box>
  );
};
export default Landing;

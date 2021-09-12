import React from "react";
import { Flex, Container, Heading, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import landingImg from "./images/19198999.jpg";
import AuthModal from "../Auth/AuthModal";
import Header from "../Header";

const Landing: React.FC = () => {
  const {
    isOpen: isOpenSignUpModal,
    onOpen: openSignUpModal,
    onClose: closeSignUpModal,
  } = useDisclosure();
  return (
    <>
      <Flex
        Flex
        h="90vh"
        bg="white"
        alignItems="center"
        justifyContent="center"
      >
        <Container pt={[4, 0]}>
          <Heading fontSize="6xl">Kanbam helps you move work forward.</Heading>
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

      <AuthModal isOpen={isOpenSignUpModal} onClose={closeSignUpModal} />
    </>
  );
};

export default Landing;

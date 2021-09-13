import React from "react";
import { Flex, Container, Heading, Text, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import landingImg from "./images/19198999.jpg";
import AuthModal from "../Auth/AuthModal";
import { useFetchUserQuery } from "../../queries/auth";
import routeChange from "../../utils/Routing/routeChange";

const Landing: React.FC = () => {
  const {
    isOpen: isOpenSignUpModal,
    onOpen: openSignUpModal,
    onClose: closeSignUpModal,
  } = useDisclosure();

  const { isLoading, error, data, isFetching } = useFetchUserQuery();

  return (
    <>
      <Flex h="90vh" bg="white" alignItems="center" justifyContent="center">
        <Container pt={[4, 0]}>
          <Heading fontSize="6xl">Kanbam helps you move work forward.</Heading>
          <Text fontSize="xl" p={2}>
            Manage projects, and tasks. Made using Typescript React, Mongo,
            Express and Node.
          </Text>
          <Flex pt={2}>
            <Button
              isLoading={isLoading || isFetching}
              onClick={
                data
                  ? () => {
                      routeChange("/taskboard");
                    }
                  : openSignUpModal
              }
              width="66%"
            >
              {data ? "Open taskboard" : "Sign up, it's free!"}
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

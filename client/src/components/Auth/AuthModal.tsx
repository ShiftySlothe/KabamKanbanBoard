import {
  Modal,
  ModalOverlay,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/modal";
import { Flex, Center, Divider, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import GoogleAuthButton from "./GoogleAuthButton";

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

          <ModalFooter justifyContent="end" mr={4}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

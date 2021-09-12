import { Container, Text, Box } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import googleLogo from "./images/g-logo.png";

interface GoogleAuthButtonProps {
  isLogIn?: boolean;
}
const GoogleAuthButton = (props: GoogleAuthButtonProps) => {
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

export default GoogleAuthButton;

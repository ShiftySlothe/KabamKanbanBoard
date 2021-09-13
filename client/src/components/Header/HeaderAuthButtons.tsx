import AuthModal from "../Auth/AuthModal";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useFetchUserQuery } from "../../queries/auth";
import routeChange from "../../utils/Routing/routeChange";
const HeaderAuthButtons = () => {
  const {
    isOpen: isOpenLogInModal,
    onOpen: openLogInModal,
    onClose: closeLogInModal,
  } = useDisclosure();

  const { isLoading, error, data, isFetching } = useFetchUserQuery();

  return (
    <>
      <Box pr={[0, 4]}>
        <Button
          isLoading={isFetching || isLoading}
          onClick={
            data
              ? () => {
                  routeChange("/api/logout");
                }
              : openLogInModal
          }
          m={1}
          fontSize={["sm", "md"]}
        >
          {isFetching || isLoading ? "" : data ? "Log out" : "Log in"}
        </Button>
      </Box>

      <AuthModal isLogIn isOpen={isOpenLogInModal} onClose={closeLogInModal} />
    </>
  );
};
export default HeaderAuthButtons;

import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

interface AddItemButtonProps {
  onClick: () => void;
  toggleButtonText: string;
}
const AddItemButton = (props: AddItemButtonProps) => {
  const { onClick, toggleButtonText } = props;
  return (
    <Box minWidth="200px">
      <Button
        onClick={onClick}
        variant="outline"
        maxWidth="300px"
        cursor="pointer"
        text-align="left"
        width="100%"
      >
        {toggleButtonText}
      </Button>
    </Box>
  );
};

export default AddItemButton;

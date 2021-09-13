import { useState, KeyboardEvent } from "react";
import { useFocus } from "../../utils/Taskboard/useFocus";
import AddItemButton from "./AddItemButton";
import { Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";
type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };

  return (
    <Flex
      maxWidth="300px"
      flexDirection="column"
      width="100%"
      alignItems="flex-start"
    >
      <Input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <AddItemButton toggleButtonText={"Create"} onClick={() => onAdd(text)} />
    </Flex>
  );
};

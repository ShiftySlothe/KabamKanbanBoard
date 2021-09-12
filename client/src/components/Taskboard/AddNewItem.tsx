import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { NewItemForm } from "./NewItemForm";
import AddItemButton from "./AddItemButton";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);
  const { onAdd, toggleButtonText } = props;

  if (showForm) {
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }

  return (
    <AddItemButton
      toggleButtonText={toggleButtonText}
      onClick={() => setShowForm(true)}
    />
  );
};

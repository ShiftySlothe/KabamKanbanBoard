import { Column } from "./Column";
import { Flex } from "@chakra-ui/layout";
import { useTaskState } from "../../state/taskState/TaskStateContext";
import { AddNewItem } from "./AddNewItem";
import { CustomDragLayer } from "./DnD/CustomDragLayer";
import { addList } from "../../state/taskState/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";
export const TaskBoard = () => {
  const { lists, dispatch } = useTaskState();

  return (
    <DndProvider backend={Backend}>
      <Flex
        height="90vh"
        p="20px"
        width="100%"
        alignItems="flex-start"
        bg="white"
        overflowX="auto"
        overflowY="hidden"
      >
        <CustomDragLayer />
        {lists.map((list) => (
          <Column id={list.id} text={list.text} key={list.id} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </Flex>
    </DndProvider>
  );
};

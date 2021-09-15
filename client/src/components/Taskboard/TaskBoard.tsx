import { Column } from "./Column";
import { Flex } from "@chakra-ui/layout";
import { useTaskState } from "../../state/taskState/TaskStateContext";
import { AddNewItem } from "./AddNewItem";
import { CustomDragLayer } from "./DnD/CustomDragLayer";
import { addList } from "../../state/taskState/actions";
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';

export const TaskBoard = () => {

  const { lists, dispatch } = useTaskState();

  return (
    <DndProvider options={HTML5toTouch}>
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

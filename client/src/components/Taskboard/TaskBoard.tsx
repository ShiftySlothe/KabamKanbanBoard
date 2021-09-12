import { Column } from "./Column";
import { TaskBoardContainer } from "./taskBoardStyles";
import { useAppState } from "../../state/AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { CustomDragLayer } from "./DnD/CustomDragLayer";
import { addList } from "../../state/actions";
import { DndProvider } from "react-dnd";
import { HTML5Backend as Backend } from "react-dnd-html5-backend";

export const TaskBoard = () => {
  const { lists, dispatch } = useAppState();

  return (
    <DndProvider backend={Backend}>
      <TaskBoardContainer>
        <CustomDragLayer />
        {lists.map((list) => (
          <Column id={list.id} text={list.text} key={list.id} />
        ))}
        <AddNewItem
          toggleButtonText="+ Add another list"
          onAdd={(text) => dispatch(addList(text))}
        />
      </TaskBoardContainer>
    </DndProvider>
  );
};

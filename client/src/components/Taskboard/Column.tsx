import { ColumnContainer, ColumnTitle } from "./styles/taskBoardStyles";
import { AddNewItem } from "./AddNewItem";
import { useTaskState } from "../../state/taskState/TaskStateContext";
import { Card } from "./Card/Card";
import {
  addTask,
  moveList,
  moveTask,
  setDraggedItem,
  deleteList,
} from "../../state/taskState/actions";
import { useRef } from "react";
import { useItemDrag } from "../../utils/Taskboard/useItemDrag";
import { useDrop } from "react-dnd";
import { isHidden } from "../../utils/Taskboard/isHidden";
import { Button } from "@chakra-ui/react";
type ColumnProps = {
  text: string;
  id: string;
  isPreview?: boolean;
};

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  const { draggedItem, getTasksByListId, dispatch } = useTaskState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  //Handle drag/drop
  const [, drop] = useDrop({
    accept: ["COLUMN", "CARD"],
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) {
          return;
        }

        dispatch(moveList(draggedItem.id, id));
      } else {
        if (draggedItem.columnId === id) {
          return;
        }
        if (tasks.length) {
          return;
        }

        dispatch(moveTask(draggedItem.id, null, draggedItem.columnId, id));
        dispatch(setDraggedItem({ ...draggedItem, columnId: id }));
      }
    },
  });
  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  drag(drop(ref));

  const deleteColumn = () => {
    console.log("Deleting list");
    dispatch(deleteList(id));
  };

  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
    >
      <ColumnTitle>
        {text}
        <Button onClick={deleteColumn}>Delete</Button>
      </ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} columnId={id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};

import { useRef } from "react";
import { CardContainer } from "../styles/taskBoardStyles";
import { Button } from "@chakra-ui/react";
import { useItemDrag } from "../../../utils/Taskboard/useItemDrag";
import { useDrop } from "react-dnd";
import { useTaskState } from "../../../state/taskState/TaskStateContext";
import { isHidden } from "../../../utils/Taskboard/isHidden";
import {
  moveTask,
  setDraggedItem,
  deleteTask,
} from "../../../state/taskState/actions";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem, dispatch } = useTaskState();
  const ref = useRef<HTMLDivElement>(null);

  //Handle drag/drop
  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type !== "CARD") {
        return;
      }
      if (draggedItem.id === id) {
        return;
      }

      dispatch(moveTask(draggedItem.id, id, draggedItem.columnId, columnId));
      dispatch(setDraggedItem({ ...draggedItem, columnId }));
    },
  });

  drag(drop(ref));

  const removeTask = () => {
    dispatch(deleteTask(id, columnId));
  };

  return (
    <CardContainer
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      isPreview={isPreview}
      ref={ref}
    >
      <p>{text}</p>
      <Button onClick={removeTask}>Delete</Button>
    </CardContainer>
  );
};

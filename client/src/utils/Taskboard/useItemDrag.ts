import { useDrag } from "react-dnd";
import { useTaskState } from "../../state/taskState/TaskStateContext";
import { DragItem } from "../../components/Taskboard/DnD/DragItem";
import { useEffect } from "react";
import { getEmptyImage } from "react-dnd-html5-backend";
import { setDraggedItem } from "../../state/taskState/actions";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useTaskState();
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item));
      return item;
    },
    end: () => dispatch(setDraggedItem(null)),
  });
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);
  return { drag };
};

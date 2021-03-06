import { nanoid } from "nanoid";
import {
  findItemIndexById,
  moveItem,
  removeItemAtIndex,
} from "../../utils/Taskboard/arrayUtils";
import { DragItem } from "../../components/Taskboard/DnD/DragItem";
import { Action } from "./actions";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type TaskState = {
  draggedItem: DragItem | null;
  lists: List[];
};

export const taskStateReducer = (
  draft: TaskState,
  action: Action
): TaskState | void => {
  switch (action.type) {
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload;
      break;
    }
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      });
      break;
    }
    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndexById(draft.lists, draggedId);
      const hoverIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
    case "MOVE_TASK": {
      const { draggedItemId, hoveredItemId, sourceColumnId, targetColumnId } =
        action.payload;

      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId);
      const targetListIndex = findItemIndexById(draft.lists, targetColumnId);

      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedItemId
      );

      const hoverIndex = hoveredItemId
        ? findItemIndexById(draft.lists[targetListIndex].tasks, hoveredItemId)
        : 0;
      const item = draft.lists[sourceListIndex].tasks[dragIndex];

      // Remove the task from the source list
      draft.lists[sourceListIndex].tasks.splice(dragIndex, 1);

      // Add the task to the target list
      draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, item);
      break;
    }
    case "DELETE_TASK": {
      //Destructure payload
      const { taskId, listId } = action.payload;
      //Find list index
      const targetListIndex = findItemIndexById(draft.lists, listId);
      //Find task index
      const targetTaskIndex = findItemIndexById(
        draft.lists[targetListIndex].tasks,
        taskId
      );
      //Remove task from relevant task[]
      draft.lists[targetListIndex].tasks = removeItemAtIndex(
        draft.lists[targetListIndex].tasks,
        targetTaskIndex
      );
      break;
    }
    case "DELETE_LIST": {
      //Destructure payload
      const { listId } = action.payload;
      //Find list index
      const targetListIndex = findItemIndexById(draft.lists, listId);
      //Remove list from list[]
      draft.lists = removeItemAtIndex(draft.lists, targetListIndex);
      break;
    }
    default: {
      break;
    }
  }
};

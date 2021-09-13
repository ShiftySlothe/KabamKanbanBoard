import { createContext, useContext, Dispatch, FC } from "react";
import { useImmerReducer } from "use-immer";
import { Action } from "./actions";
import { taskStateReducer, TaskState, List, Task } from "./taskStateReducer";
import { DragItem } from "../../components/Taskboard/DnD/DragItem";

type TaskStateContextProps = {
  draggedItem: DragItem | null;
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const TaskStateContext = createContext<TaskStateContextProps>(
  {} as TaskStateContextProps
);

const taskData: TaskState = {
  draggedItem: null,
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }],
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }],
    },
  ],
};

export const TaskStateProvider: FC = ({ children }) => {
  const [state, dispatch] = useImmerReducer(taskStateReducer, taskData);

  const { draggedItem, lists } = state;
  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <TaskStateContext.Provider
      value={{ draggedItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </TaskStateContext.Provider>
  );
};

export const useTaskState = () => {
  return useContext(TaskStateContext);
};

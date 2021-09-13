import { useDragLayer } from "react-dnd";
import { Column } from "../Column";
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from "../taskBoardStyles";
import { useTaskState } from "../../../state/taskState/TaskStateContext";
import { Card } from "../Card";

export const CustomDragLayer = () => {
  const { draggedItem } = useTaskState();
  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        {draggedItem.type === "COLUMN" ? (
          <Column id={draggedItem.id} text={draggedItem.text} isPreview />
        ) : (
          <Card
            columnId={draggedItem.columnId}
            isPreview
            id={draggedItem.id}
            text={draggedItem.text}
          />
        )}
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};

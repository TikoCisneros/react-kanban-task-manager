import { useDrop } from 'react-dnd';
import { DragTask, ItemType, ColumnType, TaskModel } from '../domain';

type UseColumnDropOptions = {
  column: ColumnType;
  onDropCB: (id: TaskModel['id'], from: ColumnType) => void;
};

export const useColumnDrop = ({ column, onDropCB }: UseColumnDropOptions) => {
  const [{ isOver }, dropRef] = useDrop<DragTask, void, { isOver: boolean }>({
    accept: ItemType.TASK,
    drop: (dragItem) => {
      if (!dragItem || dragItem.from === column) {
        return;
      }

      onDropCB(dragItem.id, column);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return {
    isOver,
    dropRef,
  };
};

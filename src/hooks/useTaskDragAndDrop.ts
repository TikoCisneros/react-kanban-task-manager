import { useDrag } from 'react-dnd';
import { DragTask, ItemType, TaskModel } from '../domain';
import { useRef } from 'react';

type DragAndDropOptions = {
  task: TaskModel;
  index: number;
};
export const useTaskDragAndDrop = <T extends HTMLElement>({ task: { id, column }, index }: DragAndDropOptions) => {
  const ref = useRef<T>(null);

  const [{ isDragging }, drag] = useDrag<DragTask, void, { isDragging: boolean }>({
    type: ItemType.TASK,
    item: { from: column, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return {
    ref,
    isDragging,
  };
};

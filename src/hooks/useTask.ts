import { TaskModel } from '../domain';
import { useTasksStore } from '../stores/tasks.store';
import { useTaskDragAndDrop } from './useTaskDragAndDrop';

type UseTaskOptions = {
  task: TaskModel;
  index: number;
};

type UseColumnModel = {
  removeTask: (id: string) => () => void;
  ref: React.RefObject<HTMLElement>;
  isDragging: boolean;
};

export const useTask = <T extends HTMLElement>({ index, task }: UseTaskOptions): UseColumnModel => {
  const deleteTask = useTasksStore((state) => state.deleteTask);

  const { ref, isDragging } = useTaskDragAndDrop<T>({ index, task });

  function removeTask(id: string) {
    return () => deleteTask(id);
  }

  return {
    removeTask,
    // DnD
    ref,
    isDragging,
  };
};

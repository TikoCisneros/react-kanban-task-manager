import { ColumnType, TaskModel } from '../domain';
import { useTasksStore } from '../stores/tasks.store';

type UseColumnModelOptions = {
  column: ColumnType;
};

type UseColumnModel = {
  tasks: TaskModel[];
  changeTaskColumnType: (id: string, column: ColumnType) => void;
};

export const useColumnModel = ({ column }: UseColumnModelOptions): UseColumnModel => {
  const tasks = useTasksStore((state) => state.findTasksByColumnType(column));
  const changeTaskColumnType = useTasksStore((state) => state.setTaskColumnType);

  return {
    tasks,
    changeTaskColumnType,
  };
};

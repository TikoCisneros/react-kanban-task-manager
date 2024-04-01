import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { initialTasks } from '../data/dummies';
import { ColumnType, TaskModel, TasksModel } from '../domain';
import { genUUID } from '../plugins/uuid.plugin';

type TaskToAdd = Pick<TaskModel, 'title' | 'description'>;

interface TasksState {
  tasks: TasksModel;
  findTasksByColumnType: (column: ColumnType) => TaskModel[];
  createTask: (task: TaskToAdd) => void;
  deleteTask: (id: string) => void;
  setTaskColumnType: (id: string, column: ColumnType) => void;
  // TODO: Add task swapping see more https://www.youtube.com/watch?v=9MKFnOKmihE&t=786s
}

const store: StateCreator<TasksState, [['zustand/immer', never], ['zustand/devtools', never]]> = (set, get) => ({
  tasks: initialTasks,
  findTasksByColumnType: (column: ColumnType) => Object.values(get().tasks).filter((task) => task.column === column),
  createTask: (task: TaskToAdd) =>
    set(
      (state) => {
        const id = genUUID();
        state.tasks[id] = { ...task, id, column: ColumnType.TO_DO, color: 'yellow.300' };
      },
      false,
      'createTask'
    ),
  deleteTask: (id: string) =>
    set(
      (state) => {
        delete state.tasks[id];
      },
      false,
      'deleteTask'
    ),
  setTaskColumnType: (id: string, column: ColumnType) =>
    set(
      (state) => {
        state.tasks[id].column = column;
      },
      false,
      'setTaskColumnType'
    ),
});

export const useTasksStore = create<TasksState>()(devtools(immer(store), { name: 'tasks-store' }));

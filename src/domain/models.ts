import { ColumnType } from './enums';

export interface TaskModel {
  id: string;
  title: string;
  description: string;
  column: ColumnType;
  color: string;
}

export type TasksModel = Record<string, TaskModel>;

export interface DragTask {
  index: number;
  id: TaskModel['id'];
  from: ColumnType;
}

import { ColumnType, TasksModel } from '../domain';

export const initialTasks: TasksModel = {
  '0f39d249-21aa-47c4-ba66-f1971ff84eb7': {
    id: '0f39d249-21aa-47c4-ba66-f1971ff84eb7',
    title: 'Do de dishes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    column: ColumnType.TO_DO,
    color: 'yellow.300',
  },
  'e9f05bc5-6646-4428-83eb-d3dd6536eece': {
    id: 'e9f05bc5-6646-4428-83eb-d3dd6536eece',
    title: 'Play soccer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    column: ColumnType.TO_DO,
    color: 'yellow.300',
  },
  '3470cabd-86b1-4932-abcc-5b435b47e641': {
    id: '3470cabd-86b1-4932-abcc-5b435b47e641',
    title: 'Do homework',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    column: ColumnType.IN_PROGRESS,
    color: 'yellow.300',
  },
};

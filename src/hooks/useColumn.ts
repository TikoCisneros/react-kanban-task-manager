import { ConnectDropTarget } from 'react-dnd';
import { ColumnType, TaskModel } from '../domain';
import { useColumnDrop } from './useColumnDrop';
import { useColumnModel } from './useColumnModel';
import { useColorModeValue } from '@chakra-ui/react';

type UseColumn = {
  tasks: TaskModel[];
  // DnD
  dropRef: ConnectDropTarget;
  isOver: boolean;
  // UI
  columnColor: string;
  columnBorderColor: string;
};

export const useColumn = (column: ColumnType): UseColumn => {
  const { tasks, changeTaskColumnType } = useColumnModel({ column });

  const { dropRef, isOver } = useColumnDrop({ column, onDropCB: changeTaskColumnType });

  const columnColor = useColorModeValue('gray.50', 'gray.600');
  const columnBorderColor = useColorModeValue('purple.200', 'white');

  return {
    tasks,
    // DnD
    dropRef,
    isOver,
    // UI
    columnColor,
    columnBorderColor,
  };
};

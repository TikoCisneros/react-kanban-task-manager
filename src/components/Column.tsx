import { Badge, Box, Heading, VStack } from '@chakra-ui/react';
import { ColumnType } from '../domain';
import { useColumn } from '../hooks/useColumn';
import Task from './Task';

type ColumnProps = {
  column: ColumnType;
};

const ColumnColorScheme: Record<ColumnType, string> = {
  todo: 'gray',
  'in progress': 'blue',
  blocked: 'red',
  completed: 'green',
};

const Column = ({ column }: ColumnProps) => {
  const { tasks, dropRef, isOver, columnColor, columnBorderColor } = useColumn(column);

  return (
    <Box mb={4}>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge px={3} py={2} rounded="lg" colorScheme={ColumnColorScheme[column]}>
          {`${column} (${tasks.length})`}
        </Badge>
      </Heading>
      <VStack
        ref={dropRef}
        minH="80dvh"
        minW={270}
        px={2}
        py={4}
        mt={4}
        spacing={4}
        bgColor={columnColor}
        rounded="lg"
        boxShadow="md"
        borderWidth={isOver ? 2 : 0}
        borderColor={isOver ? columnBorderColor : undefined}
      >
        {tasks.map((task, index) => (
          <Task key={`${task.id}-${column}`} index={index} data={task} />
        ))}
      </VStack>
    </Box>
  );
};

export default Column;

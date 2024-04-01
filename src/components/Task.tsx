import { DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Text } from '@chakra-ui/react';
import { RefObject } from 'react';

import { TaskModel } from '../domain';
import { useTask } from '../hooks';

type TaskProps = {
  index: number;
  data: TaskModel;
};

const Task = ({ index, data }: TaskProps) => {
  const { ref, isDragging, removeTask } = useTask({ index, task: data });

  return (
    <Box
      ref={ref as RefObject<HTMLDivElement>}
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={260}
      pl={3}
      pr={7}
      py={3}
      boxShadow="xl"
      cursor="grab"
      bgColor={data.color}
      opacity={isDragging ? 0.5 : 1}
    >
      <IconButton
        position="absolute"
        top={0}
        right={0}
        zIndex={100}
        aria-label="delete-task"
        size="md"
        colorScheme="solid"
        color="gray.700"
        icon={<DeleteIcon />}
        opacity={0}
        _groupHover={{
          opacity: 1,
        }}
        onClick={removeTask(data.id)}
      />
      <Text fontWeight="semibold" color="gray.700">
        {data.title}
      </Text>
      <Text color="gray.700">{data.description}</Text>
    </Box>
  );
};

export default Task;

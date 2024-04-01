import { AddIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { useTasksStore } from '../stores/tasks.store';

const AddTaskBtn = () => {
  const createTask = useTasksStore((state) => state.createTask);

  function handleAddTask() {
    createTask({ title: 'Demo task', description: 'Demo task description' });
  }

  return (
    <Button
      aria-label="Add new task"
      display="inline-flex"
      fontSize="sm"
      fontWeight={600}
      colorScheme="purple"
      onClick={handleAddTask}
    >
      <Text display={{ base: 'none', md: 'inline-flex' }} mr={2}>
        Add new task
      </Text>
      <AddIcon />
    </Button>
  );
};

export default AddTaskBtn;

import { AddIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { useModalsStore } from '../stores/modals.store';

const AddTaskBtn = () => {
  const openModal = useModalsStore((state) => state.openModal);
  /* const createTask = useTasksStore((state) => state.createTask);

  function handleAddTask() {
    createTask({ title: 'Demo task', description: 'Demo task description' });
  } */

  return (
    <Button
      aria-label="Add new task"
      display="inline-flex"
      fontSize="sm"
      fontWeight={600}
      colorScheme="purple"
      onClick={() => openModal('add-task')}
    >
      <Text display={{ base: 'none', md: 'inline-flex' }} mr={2}>
        Add new task
      </Text>
      <AddIcon />
    </Button>
  );
};

export default AddTaskBtn;

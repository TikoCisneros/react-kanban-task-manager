import { Text } from '@chakra-ui/react';
import Modal, { ModalProps } from '../../common/Modal';

// TODO: Add form to create modal
const AddTaskModal = (props: ModalProps) => {
  return (
    <Modal title="Add new task" {...props}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id est dignissimos nostrum, et placeat ad
        delectus dicta laudantium iure illo odio sint fuga tempore modi esse, amet, ipsam exercitationem!
      </Text>
    </Modal>
  );
};

export default AddTaskModal;

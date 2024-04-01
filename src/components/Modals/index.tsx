// TODO: Use the store to show modal

import AddTaskModal from './AddTaskModal';
import { useModalsStore } from '../../stores/modals.store';

const Modals = () => {
  const modalType = useModalsStore((state) => state.modalType);
  const closeModal = useModalsStore((state) => state.closeModal);

  return <>{modalType === 'add-task' && <AddTaskModal isOpen onClose={closeModal} />}</>;
};

export default Modals;

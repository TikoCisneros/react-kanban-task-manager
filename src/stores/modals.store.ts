import { create, StateCreator } from 'zustand';

type ModalType = 'add-task' | 'view-task' | 'edit-task';
interface ModalsState {
  modalType?: ModalType;
  openModal: (modalType: ModalType) => void;
  closeModal: () => void;
}

const store: StateCreator<ModalsState> = (set) => ({
  openModal: (modalType) => set({ modalType }),
  closeModal: () => set({ modalType: undefined }),
});

export const useModalsStore = create<ModalsState>()(store);

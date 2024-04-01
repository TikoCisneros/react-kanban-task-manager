import {
  Modal as UIModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalProps as UIModalProps,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Portal from './Portal';

export type ModalProps = Omit<UIModalProps, 'children'>;

type ModalPropsT = PropsWithChildren<
  {
    title: string;
  } & ModalProps
>;

const Modal = ({ title, isOpen, onClose, children }: ModalPropsT) => (
  <Portal elementId="modals-root">
    <UIModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </UIModal>
  </Portal>
);

export default Modal;

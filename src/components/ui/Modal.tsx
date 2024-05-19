import ReactDOM from "react-dom";
import { ModalContainer } from "./ModalStyles";
import { ReactNode } from "react";

interface ModalVideoProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isCentered:boolean
}

const Modal = ({ children, isOpen, onClose, isCentered =true}:ModalVideoProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalContainer isCentered={isCentered} onClick={onClose}>{children}</ModalContainer>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;

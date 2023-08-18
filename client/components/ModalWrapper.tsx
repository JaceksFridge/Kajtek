

type ModalWrapperProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
          className="fixed z-40 inset-0 bg-black opacity-50" 
          onClick={onClose}
      ></div>

      <div className="fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </>
  );
};

export default ModalWrapper;

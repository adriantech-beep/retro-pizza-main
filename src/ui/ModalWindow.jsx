import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { CircleX } from "lucide-react";

const ModalWindowContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalWindowContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalWindowContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalWindowContext);

  if (!children || typeof children !== "object") return null;

  const existingOnClick = children.props?.onClick;

  const mergedOnClick = (e) => {
    if (children.type === "a" && e.preventDefault) {
      e.preventDefault();
    }

    open(opensWindowName);

    if (typeof existingOnClick === "function") {
      existingOnClick(e);
    }
  };

  return cloneElement(children, {
    ...children.props,
    onClick: mergedOnClick,
  });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalWindowContext);

  const modalRoot = document.getElementById("modal-root");

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative  rounded-2xl shadow-xl w-full max-w-md px-6 py-5 animate-popup space-y-4">
        <button
          onClick={close}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          aria-label="Close modal"
        >
          <CircleX className="w-6 h-6" />
        </button>

        <div className="pt-4">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    modalRoot
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;

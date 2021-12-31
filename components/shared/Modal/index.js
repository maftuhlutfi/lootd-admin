import { useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";

const Modal = ({ children, onClose, show }) => {
    const ref = useRef(null)
    useOnClickOutside(ref, onClose)

    return (
        <div className={`min-h-screen w-screen bg-[#858FB4] bg-opacity-80 ${show ? 'flex' : 'hidden'} items-center justify-center absolute inset-0 z-40`}>
            <div ref={ref} className="w-[512px] bg-white rounded-3xl p-10 pt-12 relative">
                <div onClick={onClose} className="absolute top-6 right-6 text-xl cursor-pointer">&#10006;</div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
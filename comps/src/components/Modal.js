import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    // *The Unmounting code executes first before anything.
    // mounting = component adding to the DOM
    // unmounting = component removing from the DOM
    //* Component unmounts whenever there is any falsy value assigned to it.

    useEffect(() => {
        console.log("Component is mounting")
        document.body.classList.add("overflow-hidden")

        return () => {
            console.log("Component is unmounting")
            document.body.classList.remove("overflow-hidden")
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div
                onClick={onClose}
                className="fixed inset-0 bg-gray-300 opacity-80" ></div>
            <div className="fixed inset-40 p-10 bg-white" >
                <div className="flex flex-col justify-between h-full" >
                    {children}
                    <div className="flex justify-center" >
                        {actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector(".model-container")
    )
}

export default Modal;
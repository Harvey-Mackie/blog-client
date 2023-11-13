import { ToastOptions, toast } from "react-toastify";

const TOAST_OPTIONS = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    } as ToastOptions;

export function successToast(message: string){
    return toast.success(message, TOAST_OPTIONS);
}

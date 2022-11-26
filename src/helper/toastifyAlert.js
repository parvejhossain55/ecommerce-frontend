import { toast } from "react-toastify";

export function toastSuccess(text) {
    return toast.success(text);
}

export function toastError(text) {
    return toast.error(text);
}

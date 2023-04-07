import { toast, ToastPosition, Theme } from 'react-toastify';
import { ToastType } from '../types/ToastType';

export const containerOptions = {
  position: 'top-center' as ToastPosition,
  autoClose: 700,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'colored' as Theme,
};

export const useToast = ({ type, message }: ToastType) => {
  const options = {
    position: 'top-center' as ToastPosition,
    autoClose: 700,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored' as Theme,
  };

  type === 'success' ? toast.success(message, options) : toast.error(message, options);
};

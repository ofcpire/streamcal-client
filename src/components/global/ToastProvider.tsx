import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
} from 'react';
import {
  IoIosNotifications,
  IoIosWarning,
  IoMdCheckmarkCircle,
} from 'react-icons/io';

interface ToastType {
  id: number;
  message: string;
  type: 'ok' | 'bad' | undefined;
}

export const ToastContext = createContext({
  toastArray: [] as ToastType[],
  addNewToast: (message: string, type?: 'ok' | 'bad') => {},
});

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toastArray, setToastArray] = useState<ToastType[]>([]);

  const removeToast = useCallback((id: number) => {
    setToastArray((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addNewToast = useCallback(
    (message: string, type?: 'ok' | 'bad') => {
      setToastArray((prev) => {
        const id = Date.now();
        const newToast = { message, id, type } as ToastType;
        if (prev.length >= 3) {
          return [...prev.slice(1), newToast];
        } else return [...prev, newToast];
      });
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toastArray, addNewToast }}>
      {children}
      <div className='z-999 flex items-end flex-col bottom-0 right-0 fixed pointer-events-none'>
        {toastArray.map((toast) => (
          <ToastItem key={toast.id} toast={toast} remover={removeToast} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({
  toast,
  remover,
}: {
  toast: ToastType;
  remover: (id: number) => void;
}) {
  const { id, message, type } = toast;
  const toastRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (toastRef.current) {
      toastRef.current.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.style.opacity = '0';
      }
    }, 2000);

    const removeTimer = setTimeout(() => {
      remover(id);
    }, 3000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
    };
  }, [id, remover]);

  const toastStyle = `sc-lightArticle m-3 p-5 max-w-fit block flex content-center items-center justify-center font-medium transition-opacity duration-1000 ease-in-out ${
    type === 'ok'
      ? 'bg-scGreenColor dark:bg-scDarkModeGreenColor text-scOffWhiteColor'
      : type === 'bad'
      ? 'bg-scRedColor text-scOffWhiteColor'
      : ''
  }`;

  return (
    <div ref={toastRef} className={toastStyle}>
      <span className='mr-2'>
        {type === 'ok' ? (
          <IoMdCheckmarkCircle />
        ) : type === 'bad' ? (
          <IoIosWarning />
        ) : (
          <IoIosNotifications />
        )}
      </span>
      {message}
    </div>
  );
}

export default ToastItem;

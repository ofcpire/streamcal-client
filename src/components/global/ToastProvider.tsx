import React, { createContext, useEffect, useState } from 'react';

//컴포넌트형으로 수정해야 됨
class ToastClass {
  constructor(message: string, removeToast: (id: number) => void) {
    this.message = message;
    this.removeToast = removeToast;
    this.id = new Date().getTime();
    setTimeout(() => {
      this.removeToast(this.id);
    }, 5000);
  }
  id: number;
  message: string;
  private removeToast: (id: number) => void;
}

export const ToastContext = createContext({
  toastArray: [] as ToastClass[],
  addNewToast: (message: string) => {},
});

export function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toastArray, setToastArray] = useState<ToastClass[]>([]);

  const removeToast = (id: number) => {
    setToastArray((prev) => {
      const newState = prev.filter((toast) => toast.id !== id);
      return newState;
    });
    return;
  };

  const addNewToast = (message: string) => {
    setToastArray((prev) => {
      const newToast = new ToastClass(message, removeToast);
      return [...prev, newToast];
    });
  };

  return (
    <ToastContext.Provider value={{ toastArray, addNewToast }}>
      {children}
      <div className='z-999 flex items-end flex-col bottom-0 right-0 sticky'>
        {toastArray.map((toast) => (
          <div
            key={toast.id}
            className='sc-lightArticle m-3 p-5 max-w-fit block'>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

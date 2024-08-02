import { AxiosError } from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface ErrorModalContextType {
  makeErrorModal: (error: AxiosError, refetch?: () => {}) => void;
  closeErrorModal: () => void;
}

interface ErrorModalStateType {
  error: AxiosError;
  refetch?: () => {};
}

export const ErrorModalContext = createContext({
  makeErrorModal: (error: AxiosError, refetch?: () => {}) => {},
  closeErrorModal: () => {},
} as ErrorModalContextType);

export function ErrorModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [errorModal, setErrorModal] = useState<ErrorModalStateType | null>(
    null
  );
  const makeErrorModal = (error: AxiosError, refetch?: () => {}) => {
    setErrorModal({ error, refetch });
  };

  const closeErrorModal = () => {
    setErrorModal(null);
  };

  const location = useLocation();
  useEffect(() => {
    setErrorModal(null);
  }, [location]);

  return (
    <ErrorModalContext.Provider
      value={{ makeErrorModal, closeErrorModal }}>
      {children}
      {errorModal && (
        <div className='z-999 flex w-screen h-screen justify-center top-0 fixed items-center'>
          <ErrorModal
            error={errorModal.error}
            refetch={errorModal.refetch}
            closeErrorModal={closeErrorModal}
          />
        </div>
      )}
    </ErrorModalContext.Provider>
  );
}

interface ErrorModalPropsType extends ErrorModalStateType {
  closeErrorModal: () => void;
}

function ErrorModal({
  error,
  refetch,
  closeErrorModal,
}: ErrorModalPropsType) {
  const refetchHandler = () => {
    if (refetch) refetch();
    closeErrorModal();
  };

  function getErrorMessage(error: AxiosError) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          return '잘못된 요청입니다.';
        case 401:
          return '인증에 실패했습니다.';
        case 403:
          return '접근 권한이 없습니다.';
        case 404:
          return '요청한 데이터를 찾을 수 없습니다.';
        case 500:
          return '서버 내부 오류가 발생했습니다.';
        case 503:
        case 504:
          return '잠시 후 다시 시도해주세요.';
        default:
          return `알 수 없는 오류가 발생했습니다.`;
      }
    } else if (error.message === `Network Error`) {
      return '서버와의 연결에 실패했습니다.';
    } else return '알 수 없는 오류가 발생했습니다.';
  }

  const errorMessage = getErrorMessage(error);

  return (
    <div className='sc-lightArticle flex flex-col justify-center items-center p-2 shadow-lg font-medium'>
      <div className='m-2 mb-4'>
        {`${errorMessage} ${
          error.response ? `(${error.response.status})` : ''
        }`}
      </div>
      {refetch && (
        <button className='sc-lightButton w-full' onClick={refetchHandler}>
          재시도
        </button>
      )}
    </div>
  );
}

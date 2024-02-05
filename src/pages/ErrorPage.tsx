import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

export default function ErrorPage() {
  const navigate = useNavigate();
  const navToIndex = () => navigate('/');

  return (
    <>
      <Header />
      <main className='flex w-screen h-screen justify-center'>
        <section className='flex flex-col justify-center w-auto'>
          <h1 className='text-2xl'>잘못된 요청입니다.</h1>
          <button
            onClick={navToIndex}
            className='sc-lightButton m-4 text-xl'>
            돌아가기
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

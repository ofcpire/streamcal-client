import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { DarkModeWrapper } from './DarkModeWrapper';
import { ToastProvider } from './ToastProvider';

function Layout() {
  return (
    <>
      <Helmet>
        <title>STREAMCAL</title>
        <meta property='og:title' content='STREAMCAL' />
        <meta
          property='og:description'
          content='STREAMCAL에서 치지직 스트리밍 기록 쉽게 모아 보기.'
        />
        <meta
          name='description'
          content='STREAMCAL에서 치지직 스트리밍 기록 쉽게 모아 보기.'
        />
      </Helmet>
      <ScrollToTop>
        <DarkModeWrapper>
          <ToastProvider>
            <div className='min-w-[310px]'>
              <Header />
              <main className='font-sans antialiased bg-white dark:bg-scDeepDarkColor flex flex-col md:max-w min-h-[95vh] justify-start items-center pt-[64px] md:pt-[88px]'>
                <Outlet />
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </DarkModeWrapper>
      </ScrollToTop>
    </>
  );
}

export default Layout;

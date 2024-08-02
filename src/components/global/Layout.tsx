import React from 'react';
import { Outlet, useRouteError } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet-async';
import { DarkModeProvider } from './DarkModeProvider';
import { ToastProvider } from './ToastProvider';
import { ErrorModalProvider } from './ErrorModalProvider';
import ErrorPage from '../../pages/ErrorPage';

function Layout() {
  const error = useRouteError();
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
        <ErrorModalProvider>
          <DarkModeProvider>
            <ToastProvider>
              <div className='min-w-[310px]'>
                <Header />
                <main className='font-sans antialiased bg-white dark:bg-scDeepDarkColor flex flex-col md:max-w min-h-[95vh] justify-start items-center pt-[64px] md:pt-[88px]'>
                  {error ? <ErrorPage /> : <Outlet />}
                </main>
                <Footer />
              </div>
            </ToastProvider>
          </DarkModeProvider>
        </ErrorModalProvider>
      </ScrollToTop>
    </>
  );
}

export default Layout;

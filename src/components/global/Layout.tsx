import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { Helmet } from 'react-helmet-async';

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
        <Header />
        <main className='font-sans antialiased bg-white flex md:max-w min-h-[95vh] justify-center pt-[64px] md:pt-[88px]'>
          <Outlet />
        </main>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default Layout;

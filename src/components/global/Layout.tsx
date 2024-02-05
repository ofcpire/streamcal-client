import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function Layout() {
  return (
    <>
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

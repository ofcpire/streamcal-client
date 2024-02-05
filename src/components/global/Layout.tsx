import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <Header />
      <main className='font-sans antialiased bg-white flex md:max-w min-h-[95vh] justify-center pt-[64px] md:pt-[88px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

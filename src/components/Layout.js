import React from 'react';
import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, title = 'Breaking New' }) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <div className="flex">
      <div className="w-1/5 h-12" />
      <div className="w-3/5 h-12">
        {children}
      </div>
      <div className="w-1/5 h-12" />
    </div>

  </div>
);

export default Layout;

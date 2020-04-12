/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import '../css/tailwind.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;

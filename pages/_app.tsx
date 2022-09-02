import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { QueryProvider } from 'modules/react-query';
import configureStore from './configureStore';

const store = configureStore({});

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </Provider>
  );
}

import { UserProvider } from '@auth0/nextjs-auth0';
import React from 'react';

import type { AppProps } from 'next/app';

import ErrorBoundary from './errorboundary';

import { RouteGuard } from '../src/components';
import { Layout } from '../src/modules/layout';

import '../styles/globals.css';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <RouteGuard>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </RouteGuard>
    </UserProvider>
  );
}

export default MyApp;

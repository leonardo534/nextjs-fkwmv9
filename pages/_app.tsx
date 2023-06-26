import { AppProps } from 'next/app';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { Children, Component, ReactElement, ReactNode } from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function Page({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default Page;

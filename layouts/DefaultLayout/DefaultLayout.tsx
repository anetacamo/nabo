import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

interface LayoutProps {
  title?: string;
  children?: ReactNode;
  css?: string;
  description?: string;
}

export const DefaultLayout = ({
  children,
  title,
  css,
  description,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Menu />
      <div id='content' className={css} style={{ paddingTop: 60 }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import Head from 'next/head';
import { spacing } from '../styles/tokens';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 ${spacing.m};
`;

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <title>{props.title}</title>
        <link rel="stylesheet" href="https://use.typekit.net/vkt8aqg.css" />
      </Head>
      <Header 
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      {props.children}
      <Footer />
    </Container>
  );
}

export default Layout;
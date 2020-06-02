import matter from 'gray-matter';
import Layout from '../components/Layout';
import Link from 'next/link';

export default function WhatsNew(props) {
  return (
    <Layout pages={props.allPages}>
      <h1>What's new</h1>
      <p>This page will be done eventually.</p>
    </Layout>
  );
}

WhatsNew.getInitialProps = async () => {
  const configData = await import(`../data/config.json`);
  
  return {
    ...configData.default,
  }
}
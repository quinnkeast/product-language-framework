import matter from 'gray-matter';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';
import { colors, breakpoints, spacing } from '../styles/tokens';

const Alert = styled.div`
  background-color: #fff3cd;
  padding: 1.25rem 1rem 1rem;
  margin-top: 1.5rem;
  border-radius: 6px;

  p {
    margin: 0;
    color: #856404;
  }
`;

const Heading = styled.h1`
  margin-top: 0;

  @media (min-width: ${breakpoints.tabletPortrait}) {
    margin-top: ${spacing.l};  
  }              
`;

export default function Index(props) {
  return (
    <Layout pages={props.allPages}>
      <div>
        <Heading>Pistachio</Heading>
        <p>Our design system helps us work together to build a delightful user experience across all of Marley Spoons’s platforms.</p>
        <Alert>
          <p>This guide is a very, very early stage work in progress. The UX team is working on it “on the side” to support our ongoing work.</p>
          <p>Questions? Please ping <strong>@quinnkeast</strong> on Slack!</p>
        </Alert>
      </div>
      <div>
        <h2>Guides</h2>
        <p>Check out our guides to help understand how the design system works and how to design and write for Marley Spoon’s platforms using Pistachio.</p>
        <ul>
          <li>
            <Link href='/foundations/[slug]' as='/foundations/what-is-pistachio' passHref>
              <a>What is Pistachio?</a>
            </Link>
          </li>
          <li>
            <Link href='/foundations/[slug]' as='/foundations/experience-principles' passHref>
              <a>Experience principles</a>
            </Link>
          </li>
          <li>
            <Link href='/content/[slug]' as='/content/goals' passHref>
              <a>Writing content</a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
}

Index.getInitialProps = async () => {
  const configData = await import(`../data/config.json`);
  
  return {
    ...configData.default,
  }
}
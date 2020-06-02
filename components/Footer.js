import Link from 'next/link';
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 6rem 0 3rem;
`;

const FooterItem = styled.a`
  display: inline-block;
  margin-right: 1.5rem;
  font-size: .9rem;
  text-decoration: none;
  color: ${({ active }) => active ? '#111' : '#777'};

  &:visited {
    color: ${({ active }) => active ? '#111' : '#777'};
  }

  &:hover {
    color: blue;
  }
`;

const Count = styled.span`
  background-color: #e5efff;
  color: #222;
  line-height: 1;
  display: inline;
  border-radius: 12px;
  padding: 4px 8px 2px;
`;

const Footer = () => (
  <FooterContainer>
    <nav role='navigation'>
      <Link href='/whats-new' passHref>
        <FooterItem>What’s new? <Count>v0.0.1</Count></FooterItem>
      </Link>
      <FooterItem href="mailto:quinn.keast@marleyspoon.com">Get help or give feedback</FooterItem>
    </nav>
  </FooterContainer>
);

export default Footer;
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

const Footer = () => (
  <FooterContainer>
    <nav role='navigation'>
      <FooterItem href="https://twitter.com/quinnkeast">Created by Quinn Keast</FooterItem>
    </nav>
  </FooterContainer>
);

export default Footer;
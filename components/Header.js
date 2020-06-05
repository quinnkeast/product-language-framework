import Link from 'next/link';
import styled from 'styled-components';

import { colors, breakpoints, spacing } from '../styles/tokens';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing.l} ${spacing.m} ${spacing.m};
  border-bottom: 1px solid ${colors.neutral.n40};
  margin: 0 -${spacing.m};

  @media (min-width: ${breakpoints.tabletPortrait}) {
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-areas: 'logo nav';
    grid-column-gap: ${spacing.xxl};
    padding: ${spacing.xxl} 0;
    margin: 0 0 ${spacing.l};
    border-bottom: 0;
  }                       
  
  align-items: center;
  
`;

const Nav = styled.nav`
  display: none;
  flex-direction: row;
  align-items: center;
  margin-top: ${spacing.l};

  @media (min-width: ${breakpoints.tabletPortrait}) {
    display: flex;
    margin-top: 0;
  }
`;

const Home = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: ${colors.neutral.n40};
  font-size: 1.25rem;
  line-height: 1;

  &:visited {
    color: ${colors.neutral.n40};
  }
  
  @media (min-width: ${breakpoints.tabletPortrait}) {
    font-size: 1.5rem;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link href='/' passHref>
      <Home>Product Language Framework</Home>
    </Link>
    <Nav role='navigation'></Nav>
  </HeaderContainer>
);

export default Header;
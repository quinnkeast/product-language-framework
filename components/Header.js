import Link from 'next/link';
import styled , { withTheme} from 'styled-components';
import Router, { useRouter } from 'next/router';
import Burger from './Burger';

import { colors, breakpoints, spacing } from '../styles/tokens';

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink
} from "@reach/menu-button";

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

const MobileMenu = styled.div`
  display: block;

  @media (min-width: ${breakpoints.tabletPortrait}) {
    display: none;
  }
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

const NavItem = styled.a`
  display: inline-block;
  margin-right: 2rem;
  font-size: .9rem;
  line-height: 1;
  text-decoration: ${({ active }) => active ? 'underline' : 'none'};
  text-decoration-color: blue;
  text-underline-offset: 8px;
  text-decoration-thickness: 2px;
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  text-transform: uppercase;
  letter-spacing: .5px;

  &:visited {
    color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  }

  &:hover {
    color: blue;
  }
`;

const StyledMenuButton = styled(MenuButton)`
  border: 0;
  background: transparent;
  padding: 0;
`;

const StyledMenuList = styled(MenuList)`
  border: 0;
  border-radius: 4px;
  padding: ${spacing.xs} ${spacing.l};
  background: ${colors.white};
  box-shadow: 0 1.2rem 3.6rem rgba(0,0,0,.2);
`;

const StyledMenuItem = styled(MenuItem)`
  padding: 0;
  margin: ${spacing.l} 0;
  font-size: .9rem;
  line-height: 1;
  color: ${colors.neutral.n40};
  text-transform: uppercase;
  letter-spacing: .5px;

  &[data-selected] {
    background-color: transparent;
    color: ${colors.black};
  }
`;

const menuItems = [{
  title: 'Foundations',
  slug: 'what-is-pistachio',
  path: 'foundations'
}, {
  title: 'Content',
  slug: 'goals',
  path: 'content'
}];

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.pathname === props.href })}
    </Link>
  )
}

const Header = () => (
  <HeaderContainer>
    <Link href='/' passHref>
      <Home>Pistachio</Home>
    </Link>
    <Nav role='navigation'>
      {menuItems.map(item => (
        <ActiveLink href={`/${item.path}/[slug]`} as={`/${item.path}/${item.slug}`} passHref key={`${item.path}-${item.slug}`}>
          <NavItem>{item.title}</NavItem>
        </ActiveLink>
      ))}
    </Nav>
    <MobileMenu>
      <Menu>
        {({ isOpen }) => (
          <React.Fragment>
            <StyledMenuButton>
              <Burger open={isOpen} />
            </StyledMenuButton>
            <StyledMenuList>
              {menuItems.map(item => (
                <StyledMenuItem onSelect={() => Router.push(`/${item.path}/[slug]`, `/${item.path}/${item.slug}`)} href={`/${item.path}/${item.slug}`}>
                  {item.title}
                </StyledMenuItem>
              ))}
            </StyledMenuList>
          </React.Fragment>
        )}
      </Menu>
    </MobileMenu>
  </HeaderContainer>
);

export default withTheme(Header);
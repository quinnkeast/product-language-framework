import Link from 'next/link';
import styled, { withTheme } from 'styled-components';
import Router, { useRouter } from 'next/router';
import { colors, spacing, breakpoints } from '../styles/tokens';

import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover as _MenuPopover,
  MenuLink
} from "@reach/menu-button";

const SidebarContainer = styled.div`
  @media (min-width: ${breakpoints.tabletPortrait}) {
    margin-top: ${spacing.s};
  }
`;

const DesktopMenu = styled.nav`
  display: none;

  @media (min-width: ${breakpoints.tabletPortrait}) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  margin: 0 -${spacing.m} ${spacing.l};
  padding: ${spacing.m} ${spacing.m};
  border-bottom: 1px solid ${colors.neutral.n40}; 

  @media (min-width: ${breakpoints.tabletPortrait}) {
    display: none;
  }
`;

const StyledMenuButton = styled(MenuButton)`
  flex-basis: 100%;
  background: transparent;
  border: none;
  text-align: left;
  padding: 0;
`;

const MenuHeading = styled.span`
  text-transform: uppercase;
  font-size: .8rem;
  letter-spacing: .5px;
  font-weight: 400;
  color: ${colors.neutral.n40};
`;

const StyledMenuPopover = styled(_MenuPopover)`
  display: flex;
  flex-direction: column;
  border: 0;
  border-bottom: 1px solid ${colors.neutral.n40};
  background: ${colors.white};
  padding: 0 0 ${spacing.m} 0;
  margin-top: 18px;
  left: 0px!important;
  right: 0px!important;
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.2rem;
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  line-height: 1.2;
  margin: ${spacing.m} 0 0 0;

  &[data-selected] {
    background-color: transparent;
    color: ${colors.black};
  }
`;

const StyledSubMenuLink = styled(MenuLink)`
  margin: ${spacing.s} 0 0 ${spacing.m};
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  line-height: 1.4;
  font-size: 1rem;
`;

const NavItem = styled.a`
  display: block;
  font-size: 1.2rem;
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  line-height: 1.2;
  margin: 0 0 ${spacing.l} 0;
  cursor: pointer;

  &:visited {
    color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  }

  &:hover {
    color: blue;
    cursor: 'pointer';
  }

  &::before {
    visibility: ${({ active }) => active ? 'visible' : 'hidden'};
    position: absolute;
    content: '•';
    color: blue;
    margin-left: -1rem;
    margin-top: 4px;
    font-size: 1rem;
    line-height: 1;
  }
`;

const Sections = styled.div`
  margin-bottom: ${spacing.l};
  border-left: 1px solid #eaeaea;
`;

const SubNavItem = styled.a`
  display: block;
  margin: ${spacing.m} 0;
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
  line-height: 1.4;
  font-size: 1rem;
  cursor: pointer;
  padding-left: ${spacing.m};

  &:visited {
    color: #888;
  }

  &:hover {
    color: blue;    
  }
`;

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  return (
    <Link {...props}>
      {React.cloneElement(child, { active: router.asPath === props.as })}
    </Link>
  )
}

const Sidebar = props => {
  const pages = props.pages.sort((a, b) => Number(a.order) - Number(b.order));
  
  return (
    <SidebarContainer>
      <MobileMenu>
        <Menu>
          <StyledMenuButton>
            <MenuHeading>Content Navigation</MenuHeading><br />
            {props.currentPageTitle}
          </StyledMenuButton>
          <StyledMenuPopover>
            {pages.map(page => (
              <React.Fragment key={page.slug}>
                <StyledMenuItem onSelect={() => Router.push(`/[slug]`, `/${page.slug}`)} href={`/${page.slug}`}>
                  {page.title}
                </StyledMenuItem>
                {page.slug && page.slug === props.currentPage && props.sections && <React.Fragment>
                  {props.sections.map(section => {
                    const id = section.replace(/\s+/g, '-').toLowerCase();
                    return (
                      <StyledSubMenuLink href={`#${id}`} key={`section-${id}`}>
                        {section}
                      </StyledSubMenuLink>
                    )}
                  )}
                </React.Fragment>}
              </React.Fragment>
              ))}
            </StyledMenuPopover>
          </Menu>
      </MobileMenu>
      <DesktopMenu>
        {pages.map(page => (
          <div key={`page-${page.slug}`}>
            <ActiveLink
              href={`/[slug]`}
              as={`/${page.slug}`}
            >
              <NavItem>{page.title}</NavItem>
            </ActiveLink>
            {page.slug && page.slug === props.currentPage && props.sections && <Sections>
              {props.sections.map(section => {
                const id = section.replace(/\s+/g, '-').toLowerCase();
                return (
                  <Link href={`#${id}`} key={`section-${id}`}>
                    <SubNavItem>{section}</SubNavItem>
                  </Link>
                );
              })}
            </Sections>}
          </div>
        ))}
      </DesktopMenu>
    </SidebarContainer>
  );
}

export default withTheme(Sidebar);
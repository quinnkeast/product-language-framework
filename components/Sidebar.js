import Link from 'next/link';
import styled from 'styled-components';
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
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};

  &[data-selected] {
    color: ${colors.black};
  }
`;

const StyledSubMenuLink = styled(MenuLink)`
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
`;

const SubNavItem = styled.a`
  color: ${({ active }) => active ? colors.neutral.n40 : colors.neutral.n40};
`;

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  let className = child.props.className || '';
  if (router.asPath === props.as && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }
  
  delete props.activeClassName;
  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}

const Sidebar = props => {
  const pages = props.pages.sort((a, b) => Number(a.order) - Number(b.order));
  
  return (
    <div className={props.className}>
      <MobileMenu>
        <Menu>
          <StyledMenuButton>
            <MenuHeading>Content Navigation</MenuHeading><br />
            {props.currentPageTitle}
          </StyledMenuButton>
          <StyledMenuPopover>
            <div className='sticky top-0'>
              {pages.map(page => (
                <React.Fragment key={page.slug}>
                  <StyledMenuItem onSelect={() => Router.push(`/[slug]`, `/${page.slug}`)} href={`/${page.slug}`} className='text-lg'>
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
              </div>
            </StyledMenuPopover>
          </Menu>
      </MobileMenu>
      <aside className='hidden md:flex max-h-screen sticky top-0 overflow-auto pr-8'>
        <div className='pb-8 pt-8'>
          {pages.map(page => (
            <div key={`page-${page.slug}`}>
              <ActiveLink
                href={`/[slug]`}
                as={`/${page.slug}`}
                activeClassName='active'
                >
                <a className='flex pb-2 pt-2 text-lg text-gray-800'>{page.title}</a>
              </ActiveLink>
              {page.slug && page.slug === props.currentPage && props.sections && <div className='border-l border-grey-600 pl-4 mt-4 mb-4'>
                {props.sections.map(section => {
                  const id = section.replace(/\s+/g, '-').toLowerCase();
                  return (
                    <a href={`#${id}`} key={`section-${id}`} className='flex pb-2 pt-2 text-base'>{section}</a>
                  );
                })}
              </div>}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
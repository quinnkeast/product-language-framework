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
  MenuPopover, //as _MenuPopover,
  MenuLink
} from "@reach/menu-button";

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
      <div className='flex md:hidden border-b-1 border-gray-300'>
        <Menu>
          <MenuButton className='flex-1 border-b border-gray-300 bg-transparent text-left padding-0 pb-4 -ml-4 -mr-4 pl-4 pr-4 mb-4'>
            <span className='text-xs uppercase tracking-wide text-gray-600'>Content Navigation</span><br />
            {props.currentPageTitle}
          </MenuButton>
          <MenuPopover className='flex flex-col border-b border-gray-200 pb-4 pt-4 bg-white shadow-lg' style={{ left: 0, right: 0 }}>
            <div className='top-0'>
              {pages.map(page => (
                <React.Fragment key={page.slug}>
                  <ActiveLink
                    href={`/[slug]`}
                    as={`/${page.slug}`}
                    activeClassname='text-gray-900'
                    >
                    <MenuItem onSelect={() => {}} className='flex pl-4 pr-4 pt-2 pb-2 text-gray-800'>{page.title}</MenuItem>  
                  </ActiveLink>
                  {page.slug && page.slug === props.currentPage && props.sections && <React.Fragment>
                    {props.sections.map(section => {
                      const id = section.replace(/\s+/g, '-').toLowerCase();
                      return (
                        <MenuItem 
                          href={`#${id}`}
                          key={`section-${id}`}
                          style={{ paddingLeft: 32, paddingRight: 32 }}
                          className='flex pt-2 pb-2'
                          onSelect={() => {}} 
                          >
                          {section}
                        </MenuItem>  
                      )}
                    )}
                  </React.Fragment>}
                </React.Fragment>
                ))}
              </div>
            </MenuPopover>
          </Menu>
      </div>
      <aside className='hidden md:flex max-h-screen sticky top-0 overflow-auto pr-8'>
        <nav className='pb-8 pt-8' aria-label='Main menu'>
          {pages.map(page => (
            <div key={`page-${page.slug}`}>
              <ActiveLink
                href={`/[slug]`}
                as={`/${page.slug}`}
                activeClassName='active'
                >
                <a 
                  className='flex pb-2 pt-2 text-lg text-gray-800'
                  title={page.title}
                  aria-level='2'
                >
                  {page.title}
                </a>
              </ActiveLink>
              {page.slug && page.slug === props.currentPage && props.sections && <div className='border-l border-grey-600 pl-4 mt-4 mb-4'>
                {props.sections.map(section => {
                  const id = section.replace(/\s+/g, '-').toLowerCase();
                  return (
                    <a href={`#${id}`} key={`section-${id}`} className='flex pb-2 pt-2 text-base' title={section} aria-level='3'>{section}</a>
                  );
                })}
              </div>}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
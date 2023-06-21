import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  let className = props.className || '';
  if (router.asPath === props.as && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }
  
  delete props.activeClassName;
  
  return <Link {...props} className={className}>{children}</Link>;
}

const Sidebar = (props) => {
  const pages = props.pages.sort((a, b) => Number(a.order) - Number(b.order));
  
  return (
    <div className={props.className}>
      <aside className='hidden md:flex max-h-screen sticky top-0 overflow-visible pr-8'>
        <nav className='pb-8 pt-8' aria-label='Main menu'>
          {pages.map(page => (
            <div key={`page-${page.slug}`}>
              <ActiveLink
                href={`/[slug]`}
                as={`/${page.slug}`}
                activeClassName='font-semibold'
                className='flex my-3 text-lg text-gray-800 hover:text-blue-500'
                title={page.title}
                aria-level='2'
              >
                <>{page.title}</>
              </ActiveLink>
              {(page.slug === props.currentPage) && props.sections && <div className='border-l border-grey-600 pl-4 mt-4 mb-4'>
                {props.sections.map(section => <a href={section.link} key={section.link} className='flex text-base my-2' title={section.text} aria-level='3'>{section.text}</a>
                )}
              </div>}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
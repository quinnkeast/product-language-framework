import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  let className = props.className || '';
  if (router.asPath === props.as && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }
  
  delete props.activeClassName;
  
  return <Link {...props} className={className}>{children}</Link>;
}

const genericHamburgerLine = `h-0.5 w-5 my-0.5 rounded-full bg-gray-300 transition ease transform duration-300`;

const Sidebar = (props) => {
  const pages = props.pages.sort((a, b) => Number(a.order) - Number(b.order));

  const [toggled, setToggled] = React.useState(false);

  const Nav = ({pages, props}) => {
    return (
      <>
        {pages.map(page => (
          <div key={page.slug}>
            <ActiveLink
              href={`/[slug]`}
              as={`/${page.slug}`}
              activeClassName='font-semibold'
              className='flex mb-3 text-lg text-gray-800 hover:text-blue-500'
              title={page.title}
              aria-level='2'
            >
              <>{page.title}</>
            </ActiveLink>
            {(page.slug === props.currentPage) && props.sections && <div className='border-l border-grey-600 pl-4 mt-4 mb-4'>
              {props.sections.map(section => <a href={section.link} key={section.link} className='flex text-base leading-snug my-3' title={section.text} aria-level='3'>{section.text}</a>
              )}
            </div>}
          </div>
        ))}
      </>
    )
  };
  
  return (
    <div className={props.className}>
      <aside id="sidebar" className='md:flex md:max-h-screen md:sticky md:top-0 overflow-hidden md:overflow-auto md:pr-8 md:pl-1 py-1'>
        <nav className="md:hidden flex justify-between items-center py-2 border-t-2 border-b mt-4 mb-4" arial-label="Mobile menu">
          <div>
            <span className="uppercase font-semibold text-xs">Current</span>
            {pages.map(page => (page.slug === props.currentPage) && <p className="mb-1 mt-0">{page.title}</p>)}
          </div>
          <button className="flex flex-col align-middle justify-center content-center p-2" onClick={() => setToggled(!toggled)}>
            <div className={genericHamburgerLine}></div>
            <div className={genericHamburgerLine}></div>
            <div className={genericHamburgerLine}></div>
          </button>
        </nav>
        {toggled && <div className="border-b-2 mb-6 pb-2">
          <Nav pages={pages} props={props} />
        </div>}
        <nav className='hidden md:block md:pb-8' aria-label='Main menu'>
          <Nav props={props} pages={pages} />
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
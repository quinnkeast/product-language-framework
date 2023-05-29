import React, { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import { getMDXComponent } from "mdx-bundler/client";

const Content = (props) => {
  const { page, pages, path } = props;

  const [sectionHeadings, setSectionHeadings] = useState([]);
  
  const parseHeading = (props) => {
    return (
      <>
        {props.children.map((child) => {
          const stringValue = child.props.value;
          const transformedValue = stringValue.replace(/\s+/g, '-').toLowerCase();
          const Tag = `h${props.level}`;
          // We only want to include H2 elements in the sidebar as section navigation
          if (sectionHeadings.indexOf(stringValue) < 0 && props.level === 2) {
            setSectionHeadings((prevHeadings) => [...prevHeadings, stringValue]);
          }

          return (
            <Tag id={transformedValue} key={`heading-${transformedValue}`}>
              <a name={transformedValue} className='anchor' href={`#${transformedValue}`} rel='nofollow' aria-hidden='true' title={stringValue} tabIndex='-1'></a>
              {child}
            </Tag>
          );
        })}
      </>
    );
  };

  const ContentComponent = useMemo(() => getMDXComponent(page.content), [page.content]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-12'>
      <Sidebar
        className='col-span-2'
        path={path}
        pages={pages}
        sections={sectionHeadings}
        currentPage={page.slug}
        currentPageTitle={page.title}
      />
      <article className='md:col-span-5 md:pt-8'>
        <h1>{page.title}</h1>
        <ContentComponent
          components={{
            heading: (heading) => {
              return parseHeading(heading);
            },
          }}
        />
      </article>
    </div>
  );
};

export default Content;

import React, { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import { getMDXComponent } from "mdx-bundler/client";

const Content = (props) => {
  const { page, pages, path } = props;

  const [sectionHeadings, setSectionHeadings] = useState([]);

  const parseHeading = (props) => {
    console.log(props);
    const stringValue = props.value;
    const transformedValue = stringValue.replace(/\s+/g, '-').toLowerCase();

    setSectionHeadings((prevHeadings) => [...prevHeadings, stringValue]);

    return (
      <h2 id={transformedValue} key={`heading-${transformedValue}`}>
        <a name={transformedValue} className='anchor' href={`#${transformedValue}`} rel='nofollow' aria-hidden='true' title={stringValue} tabIndex='-1'></a>
        {props.value}
      </h2>
    );
  }

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
            h2: (props) => { console.log(props); return parseHeading(props) },
          }}
        />
      </article>
    </div>
  );
};

export default Content;

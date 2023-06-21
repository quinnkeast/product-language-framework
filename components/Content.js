import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './Sidebar';
import { getMDXComponent } from "mdx-bundler/client";

const Content = (props) => {
  const { page, pages, path } = props;

  function getAnchor(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/[ ]/g, '-');
  }

  const H2 = ({ children }) => {
    const anchor = getAnchor(children);
    const link = `#${anchor}`;
    return (
      <h2 id={anchor}>
        <a href={link} className="anchor" rel="nofollow" aria-hidden="true" title="anchor" tabIndex="-1"></a>
        {children}
      </h2>
    );
  };

  const ContentComponent = useMemo(() => getMDXComponent(page.content), [page.content]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-7 md:gap-12">
      <Sidebar
        className="col-span-2"
        path={path}
        pages={pages}
        sections={page.sections}
        currentPage={page.slug}
        currentPageTitle={page.title}
      />
      <article className="md:col-span-5 md:pt-8">
        <h1>{page.title}</h1>
        <ContentComponent
          components={{
            h2: H2,
          }}
        />
      </article>
    </div>
  );
};

export default Content;

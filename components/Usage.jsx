import React, { useMemo } from 'react';
import { getMDXComponent } from "mdx-bundler/client";

function parseHeading(props) {
  const children = props.children.map(child =>
    <a href='#' tabIndex='-1' aria-disabled disabled='disabled'>{child.props.value}</a>
  );
  return children;
}

const Usage = (props) => {
  const content = props.children;

  //const ContentComponent = useMemo(() => getMDXComponent(content), [content]);

  return (
    <div className={`usage usage-${props.type}`}>
      {content}
    </div>
  );
};

export default Usage;

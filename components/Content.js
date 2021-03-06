import { Component } from 'react';
import Sidebar from './Sidebar';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import UsageBlock from './UsageBlock';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionHeadings: []
    };
  }

  parseHeading(props) {
    const { sectionHeadings } = this.state;
    return (
      <React.Fragment>
        {props.children.map(child => {
          const stringValue = child.props.value;
          const transformedValue = stringValue.replace(/\s+/g, '-').toLowerCase();
          const Tag = `h${props.level}`;
          // We only want to include H2 elements in the sidebar as section navigation
          if (sectionHeadings.indexOf(stringValue) < 0 && props.level == 2) {
            sectionHeadings.push(stringValue);
            this.setState({ sectionHeadings });
          }

          return (
            <Tag
              id={transformedValue}
              key={`heading-${transformedValue}`}>
              <a name={transformedValue} className='anchor' href={`#${transformedValue}`} rel='nofollow' aria-hidden='true' title={stringValue} tabIndex='-1'></a>
              {child}
            </Tag>
          );
        })}
      </React.Fragment>
    );
  }

  render(props) {
    const { 
      content,
      data,
      pages,
      slug,
      path,
    } = this.props;

    const { sectionHeadings } = this.state;
    
    return (
      <div className='grid grid-cols-1 md:grid-cols-7 md:gap-12'>
        <Sidebar 
          className='col-span-2'
          path={path}
          pages={pages}
          sections={sectionHeadings}
          currentPage={slug}
          currentPageTitle={data.title}
        />
        <article className='md:col-span-5 md:pt-8'>
          <h1>{data.title}</h1>
          <ReactMarkdown 
            source={content}
            escapeHtml={false}
            renderers={{ 
              heading: heading => {
                return this.parseHeading(heading);
              },
              code: ({ language, value }) => {
                if (language === 'usage') {
                  return <UsageBlock>{value}</UsageBlock>;
                }
                const className = language && `language-${language}`;
                const code = React.createElement('code', className ? { className: className } : null, value);
                return React.createElement('pre', {}, code);
              }
            }}
          />
        </article>
      </div>
    );
  }
}

export default Content;


import { Component } from 'react';
import Link from 'next/link';
import Sidebar from './Sidebar';
import ReactMarkdown from 'react-markdown/with-html';
import styled from 'styled-components';
import { breakpoints, spacing } from '../styles/tokens';
import UsageBlock from './UsageBlock';

const GridContainer = styled.div`
  display: grid;
  grid-template-areas: 'sidebar'
                       'content';

  @media (min-width: ${breakpoints.tabletPortrait}) {
    grid-template-areas: 'sidebar content';
    grid-template-columns: 300px 1fr;
    grid-column-gap: ${spacing.xxl};
  }
`;

const PageTitle = styled.h1`
  margin-top: 0;
`;

const Article = styled.article`  
`;

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
      <GridContainer>
        <Sidebar 
          path={path}
          pages={pages}
          sections={sectionHeadings}
          currentPage={slug}
          currentPageTitle={data.title}
        />
        <Article>
          <PageTitle>{data.title}</PageTitle>
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
        </Article>
      </GridContainer>
    );
  }
}

export default Content;


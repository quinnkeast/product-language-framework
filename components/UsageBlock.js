import convert from 'htmr';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown/with-html';
import { breakpoints, colors, spacing } from '../styles/tokens';

const UsageElement = (props) => {
  return(
    <div className={`usage usage-${props.type}`}>
      <ReactMarkdown
        source={props.children.toString()}
        escapeHtml={false}
      />
    </div>
  );
};

const StyledUsageBlock = styled.div`
  display: grid;
  grid-row-gap: ${spacing.m};
  margin: ${spacing.l} 0 ${spacing.xl};

  @media (min-width: ${breakpoints.tabletPortrait}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${spacing.l};
  }

  .usage {
    padding: 1rem 1.5rem 0 1.5rem;
    border-radius: 3px;
    background-color: ${colors.neutral.n20};

    h3 {
      font-size: .8rem;
      margin-top: 0;
      font-weight: 500;
      color: ${colors.neutral.n40};
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    ul {
      margin-top: 0.5rem;
    }

    li {
      color: ${colors.neutral.n40};
    }
  }

  .usage-yes {
    border-top: 3px solid #50b83c;
  }

  .usage-no {
    border-top: 3px solid #de3618;
  }
`;

const UsageBlock = (props) => {
  // Convert Usage tag from .md into rendered component
  const transform = {
    usage: UsageElement 
  };
  return <StyledUsageBlock>{convert(props.children, { transform } )}</StyledUsageBlock>;
};

export default UsageBlock;
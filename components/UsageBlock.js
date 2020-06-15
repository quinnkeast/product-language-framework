import convert from 'htmr';
import ReactMarkdown from 'react-markdown/with-html';

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

const UsageBlock = (props) => {
  // Convert Usage tag from .md into rendered component
  const transform = {
    usage: UsageElement 
  };
  return <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8'>{convert(props.children, { transform } )}</div>;
};

export default UsageBlock;
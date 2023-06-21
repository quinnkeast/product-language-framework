import React from 'react';

const UsageBlock = ({ children }) => {
  return <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-8'>{children}</div>;
};

export default UsageBlock;

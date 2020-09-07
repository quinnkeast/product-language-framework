import React, { useEffect } from 'react';
import Router from 'next/router';

// Redirect '/' to /overview so that the markdown docs just work
export default function Index() {
  useEffect(() => {
    const {pathname} = Router;
    if (pathname === '/') {
      Router.push('/overview');
    }
  }, []);
  return (null);
}

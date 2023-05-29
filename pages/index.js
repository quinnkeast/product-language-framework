import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Redirect '/' to /overview so that the markdown docs just work
export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const {pathname} = router;
    if (pathname === '/') {
      router.push('/overview');
    }
  }, []);

  return (null);
}

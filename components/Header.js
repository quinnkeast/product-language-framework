import Link from 'next/link';

const Header = () => (
  <div className='pt-6 md:pt-16 pb-6 md:pb-8 text-xl'>
    <Link href='/' className='text-lg text-gray-800 font-bold'>
      Product Language Framework
    </Link>
  </div>
);

export default Header;
import Link from 'next/link';

const Header = () => (
  <div className='pt-6 md:py-16 text-xl'>
    <Link href='/' className="inline-flex">
      <img src="/assets/icon.svg" width="30" height="28" alt="Pixel art of pencil writing helper text on an input" />
      <span className='ml-3 text-lg text-gray-800 font-bold hover:text-gray-500'>UX Language</span>
    </Link>
  </div>
);

export default Header;

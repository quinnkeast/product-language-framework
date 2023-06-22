import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const Layout = (props) => {
  return (
    <div className='container mx-auto pl-4 pr-4 md:pl-8 md:pr-8'>
      <Meta />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
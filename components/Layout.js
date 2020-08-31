import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='container mx-auto pl-4 pr-4 md:pl-8 md:pr-8'>
      <Header 
        siteTitle={props.siteTitle}
        siteDescription={props.siteDescription}
      />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import PaginationOutlined from './customer/components/Pagination/Pagination';
import Product from './customer/components/Product/Product';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product />
        <PaginationOutlined />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;

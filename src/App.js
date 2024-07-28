import './App.css';
import Cart from './customer/components/Cart/Cart';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import PaginationOutlined from './customer/components/Pagination/Pagination';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product /> */}
        {/* <PaginationOutlined /> */}
        {/* <ProductDetails /> */}
        <Cart />
      </div>
      <Footer />
    </div>
    
  );
}
export default App;

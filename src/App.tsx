import Loader from './components/Loader';
import Product from './components/Product';
import useProducts  from './hooks/products';
import Error from './components/Error';

function App() {
  const { loading, error, products} = useProducts();
  return (
    <div className="container flex flex-wrap justify-center p-2 gap-2 mx-auto pt-5">
      { loading && <Loader/>}
      { error && <Error error={error} />}
      { products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;

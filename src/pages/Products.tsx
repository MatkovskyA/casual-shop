import Loader from '../components/Loader';
import Product from '../components/Product';
import useProducts  from '../hooks/products';
import Error from '../components/Error';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import { useContext } from 'react';
import { IProduct } from '../models';
import { ModalContext } from '../context/ModalContext';

function Products() {
  const { loading, error, products, addProduct} = useProducts();
  const { modal, open, close } = useContext(ModalContext)

  const createHandler = (product: IProduct) => {
    close()
    addProduct(product)
  }

  return (
    <div className="container flex flex-wrap justify-center p-2 gap-2 mx-auto pt-[100px]">
      { loading && <Loader/>}
      { error && <Error error={error} />}
      { products.map(product => <Product product={product} key={product.id} />)}

      {modal && <Modal title='Create new product' onClose={() => close()}>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
      <button className='fixed bottom-5 right-5 rounded-full bg-red-200 p-4 z-10'
        onClick={() => open()}> Добавь товар +</button>
    </div>
  );
}

export default Products;
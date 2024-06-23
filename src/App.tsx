import React, { useState } from 'react';
import Product from './components/Product';
import { products } from './data/products';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container flex flex-wrap gap-3 mx-auto max-w-2xl pt-5">
      <Product product={products[0]}/>
      <Product product={products[1]}/>

    </div>
  );
}

export default App;

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCreateForm from '../components/ProductCreateForm'
import ProductList from '../components/ProductList';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('use effect');
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoaded(true);
      })
  },[])

  return (
    <div>
      <ProductCreateForm />
      <hr />
      {loaded && <ProductList products={products} />}
    </div>

  )
}

export default Main
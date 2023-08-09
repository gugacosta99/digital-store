import React from 'react';
import './App.css';
import ProductListPage2 from './components/ProductPage/ProductListPage2';
import Layout from './components/Layout/Layout';
import products from './data/data.js';

/* interface Product {
  id: number;
  name: string;
  brand: string;
  status: string;
} */

function App() {
  return (
    <div>
      <Layout>
        <ProductListPage2
          productList={products}
        />
      </Layout>
    </div>
  );
}

export default App;

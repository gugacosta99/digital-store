import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  status: string;
}

interface Props {
  products: Product[];
}

const ProductListPage: React.FC<Props> = ({ products }) => {
  const [filterName, setFilterName] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredProducts = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(filterName.toLowerCase());
    const statusMatch = filterStatus === 'All' || product.status === filterStatus;
    return nameMatch && statusMatch;
  });

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Filter by name or brand"
          value={filterName}
          onChange={handleNameChange}
        />
        <select value={filterStatus} onChange={handleStatusChange}>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <a href="#">Create New Product</a>
      </div>
      <div>
        {/* Placeholder for the card component */}
        {filteredProducts.map(product => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.brand}</p>
            <p>{product.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
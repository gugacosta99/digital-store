import { useState, useEffect } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import ProductCard from './ProductCard';
import ProductPagePagination from './ProductPagePagination';

const ProductListPage2 = ({ productList }) => {
  const [searchbar, setSearchbar] = useState('');
  const [status, setStatus] = useState('All');
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [pageProductList, setPageProductList] = useState([]);

  const filterByNameOrBrand = () => {
    const filteredList = productList.filter(
      (product) =>
        product.name.includes(searchbar) || product.brand.includes(searchbar)
    );
    setFilteredProductList(filteredList);
  };

  const filterByStatus = () => {
    const filteredList = productList.filter((product) => {
      if (status === 'All') {
        return true;
      }
      return product.status === status;
    });
    setFilteredProductList(filteredList);
  };

  useEffect(() => {
    filterByNameOrBrand();
  }, [searchbar]);

  useEffect(() => {
    filterByStatus();
  }, [status]);

/*   useEffect(() => {
    setPageProductList(filteredProductList);
  }, [filteredProductList]) */

  const createProduct = () => {
    // Do nothing for now
  };

  return (
    <div className="container mx-auto px-4 pt-10" style={{ maxWidth: '1300px' }}>
      <h2 className="font-bold text-3xl mb-4 text-secondary">Produtos</h2>

      <div className="flex flex-col items-center md:flex-row  md:justify-between mb-7 pb-7 mt-14 border-b-2 border-solid">
        <div className="flex">
          <div className="flex">
            <input
              type="text"
              placeholder="Search by Name or Brand"
              className="border border-solid border-primary rounded-l px-4 h-10 mr-0"
              value={searchbar}
              onChange={(e) => setSearchbar(e.target.value)}
            />
            <button
              className="border border-solid border-r-0 border-primary rounded-r h-10 px-4 font-bold text-white bg-primary"
              onClick={filterByNameOrBrand}
            >
              <FaSearch />
            </button>
          </div>
          <select
            className="border border-solid rounded px-4 h-10 ml-4"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className='md:h-10 border-solid border-l-2'></div>
        <button
          className="border border-solid rounded px-4 h-10 w-80 mt-2 md:mt-0 md:w-48 font-bold text-white bg-primary hover:bg-primary_light hover:text-primary border-primary transition duration-300"
          onClick={createProduct}
        >
          <div className="flex items-center justify-center md:justify-evenly"><FaPlus />Create Product</div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageProductList.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

      <ProductPagePagination
        fullProductList={filteredProductList}
        setPageProductList={setPageProductList}
      />
    </div>
  );
};

export default ProductListPage2;

          /* <div
            key={product.id}
            className="w-96 h-72 border border-solid rounded p-4 hover:shadow-lg relative"
          >
            <img className="absolute inset-0 w-full h-3/5 object-cover" src={`https://picsum.photos/id/${product.id + (product.id * 10)}/380/150`}></img>
            <p>Name: {product.name}</p>
            <p>Brand: {product.brand}</p>
            <p>Status: {product.status}</p>
          </div> */

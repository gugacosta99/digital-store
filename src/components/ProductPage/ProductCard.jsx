import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { BiSolidPencil } from 'react-icons/bi';

const ProductCard = ({ product }) => {
    return (
        <div className="card border-solid border border-gray-300 rounded-md shadow-lg hover:shadow-xl h-72">
            <img
                className="w-full h-2/5 object-cover rounded-t-md"
                src={`https://picsum.photos/id/${product.id * 10}/250/250`}
                alt={product.name}
            />
            <div className="data h-1/2 m-2 flex flex-col justify-between">
                <p className="name-top text-secondary text-lg font-bold">{product.name}</p>
                <div className="date-status flex justify-around items-center w-1/2">
                    <p className="date text-secondary text-sm font-bold">{product.creationDate}</p>
                    <p className={`status text-white rounded-full px-2 py-1 ${product.status === 'Active' ? 'bg-green-500' : 'bg-yellow-800'}`}>
                        {product.status}
                    </p>
                </div>
                <button className="w-20 edit text-primary no-underline hover:underline flex justify-evenly items-center"><BiSolidPencil/>Edit</button>
            </div>
        </div>
    );
};

export default ProductCard;
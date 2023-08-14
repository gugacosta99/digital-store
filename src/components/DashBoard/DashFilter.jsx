import React, { useEffect, useState } from 'react';
import brandNames from '../../data/brandData';
import productList from '../../data/productData';
import statusList from '../../data/statusData';
import paymentMethods from '../../data/paymentMethodData';

const DashFilter = ({ fullOrderList, setFilteredOrderList }) => {
    const [brandFilter, setBrandFilter] = useState('');
    const [productFilter, setProductFilter] = useState('');
    const [productFilterOptions, setProductFilterOptions] = useState(['', ...productList.map(e => e.name)]);
    const [paymentFilter, setPaymentFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [startDateFilter, setStartDateFilter] = useState('2023-08-09 00:00');
    const [endDateFilter, setEndDateFilter] = useState('2023-08-09 23:59');
    const [dateFilter, setDateFilter] = useState('today');

    console.log(startDateFilter)

    useEffect(() => {
        applyFilter();
    }, [brandFilter, productFilter, paymentFilter, statusFilter, startDateFilter, endDateFilter]);

    useEffect(() => {
        if(brandFilter != ''){
            setProductFilterOptions(['', ...productList.filter(e => e.brand === brandFilter).map(e => e.name)]);
        } else {
            setProductFilterOptions(['', ...productList.map(e => e.name)])
        }
    }, [brandFilter]);

    useEffect(() => {
        if (dateFilter === 'today') {
            setStartDateFilter('2023-08-09 00:00');
        } else if (dateFilter === 'week') {
            setStartDateFilter('2023-08-03 00:00');
        } else if (dateFilter === 'month') {
            setStartDateFilter('2023-07-10 00:00');
        }
        setEndDateFilter('2023-08-09 23:59');
    }, [dateFilter]);

    const applyFilter = () => {
        const retOrderList = fullOrderList.filter(order => {
            const brandProductBool = applyFilterBrandProduct(order);
            const paymentBool = applyFilterPayment(order);
            const statusBool = applyFilterStatus(order);
            const startDateBool = applyFilterStartDate(order);
            const endDateBool = applyFilterEndDate(order);
            return brandProductBool && paymentBool && statusBool && startDateBool && endDateBool;
        });
        setFilteredOrderList(retOrderList);
    };

    const applyFilterBrandProduct = order => {
        if (brandFilter === '' && productFilter === '') {
            return true;
        } else {
            const productItems = order.items.map(item => productList.find(product => product.id === item.productID));
            let returnBool = true;
            if (brandFilter !== '' && !productItems.find(pi => pi && pi.brand === brandFilter)) {
                returnBool = false;
            }
            if (returnBool && productFilter !== '' && !productItems.find(pi => pi && pi.name === productFilter)) {
                returnBool = false;
            }
            return returnBool;
        }
    };

    const applyFilterPayment = order => {
        if (paymentFilter === '') {
            return true;
        } else {
            return order.paymentMethod === paymentFilter;
        }
    };

    const applyFilterStatus = order => {
        if (statusFilter === '') {
            return true;
        } else {
            return order.status === statusFilter;
        }
    };

    const applyFilterStartDate = order => {
        const startDate = new Date(startDateFilter);
        const orderDate = new Date(order.date.split('/').reverse().join('-'));
        return orderDate >= startDate;
    };

    const applyFilterEndDate = order => {
        const endDate = new Date(endDateFilter);
        const orderDate = new Date(order.date.split('/').reverse().join('-'));
        return orderDate <= endDate;
    };

    const clearFilters = () => {
        setBrandFilter('');
        setProductFilter('');
        setProductFilterOptions(['', ...productList.map(e => e.name)]);
        setPaymentFilter('');
        setStatusFilter('');
        setStartDateFilter('2023-08-09 00:00');
        setEndDateFilter('2023-08-09 23:59');
        setDateFilter('today');
    };

    return (
        <div className="border-b border-gray-300">
            <div className="flex justify-between mb-4">
                {/* Brand dropdown input */}
                <select
                    className="h-10 w-1/5 border-b border-primary border-solid arrow-color-primary"
                    onChange={e => setBrandFilter(e.target.value)}
                    value={brandFilter}
                >
                    <option value="" disabled>
                        Brand
                    </option>
                    {['', ...brandNames].map(brand => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
                {/* Product dropdown input */}
                <select
                    className="h-10 w-1/5 border-b border-primary border-solid arrow-color-primary"
                    onChange={e => setProductFilter(e.target.value)}
                    value={productFilter}
                >
                    <option value="" disabled>
                        Product
                    </option>
                    {['', ...productFilterOptions].map(product => (
                        <option key={product} value={product}>
                            {product}
                        </option>
                    ))}
                </select>
                {/* Payment Method dropdown input */}
                <select
                    className="h-10 w-1/5 border-b border-primary border-solid arrow-color-primary"
                    onChange={e => setPaymentFilter(e.target.value)}
                    value={paymentFilter}
                >
                    <option value="" disabled>
                        Payment Method
                    </option>
                    {['', ...paymentMethods].map(paymentMethod => (
                        <option key={paymentMethod} value={paymentMethod}>
                            {paymentMethod}
                        </option>
                    ))}
                </select>
                {/* Status dropdown input */}
                <select
                    className="h-10 w-1/5 border-b border-primary border-solid arrow-color-primary"
                    onChange={e => setStatusFilter(e.target.value)}
                    value={statusFilter}
                >
                    <option value="" disabled>
                        Status
                    </option>
                    {['', ...statusList].map(status => (
                        <option key={status} value={status}>
                            {status}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-evenly items-center mb-4 h-10">
                <p>Filter by Period: </p>
                {/* Calendar inputs */}
                <div className="flex justify-center items-center">
                    <p>Start Date: </p>
                    <input
                        type="date"
                        className="h-10 border-primary border-b border-solid symbol-color-primary"
                        onChange={e => setStartDateFilter(e.target.value + ' 00:00')}
                        value={startDateFilter.substring(0, 10)}
                    />
                </div>
                <div className="flex justify-center items-center">
                    <p>End Date: </p>
                    <input
                        type="date"
                        className="h-10 border-primary border-b border-solid symbol-color-primary"
                        onChange={e => setEndDateFilter(e.target.value + ' 23:59')}
                        value={endDateFilter.substring(0, 10)}
                    />
                </div>
                {/* Date buttons */}
                <div className="flex">
                    <button
                        className={`border-solid border rounded-l-md border-r-0 border-primary h-10 m-0 p-1 ${dateFilter === 'today' ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-primary_light hover:text-white transition duration-300'
                            }`}
                        onClick={() => setDateFilter('today')}
                    >
                        Today
                    </button>
                    <button
                        className={`border-solid border border-primary h-10 m-0 p-1 ${dateFilter === 'week' ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-primary_light hover:text-white transition duration-300'
                            }`}
                        onClick={() => setDateFilter('week')}
                    >
                        This Week
                    </button>
                    <button
                        className={`border-solid border rounded-r-md border-l-0 border-primary h-10 m-0 p-1 ${dateFilter === 'month' ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-primary_light hover:text-white transition duration-300'
                            }`}
                        onClick={() => setDateFilter('month')}
                    >
                        This Month
                    </button>
                </div>
                {/* Clear Filters button */}
                <button className="border-solid border rounded-md border-primary h-10 m-0 p-1 text-primary bg-white hover:bg-primary_light hover:text-white transition duration-300" onClick={clearFilters}>
                    Clear Filters
                </button>
            </div>
        </div>
    );
};

export default DashFilter;

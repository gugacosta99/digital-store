import { useState, useEffect } from 'react';
import orders from '../../data/orderData';
import brandNames from '../../data/brandData';
import DashFilter from './DashFilter';

const Dashboard = () => {
    const [filteredOrderList, setFilteredOrderList] = useState(orders);

    console.log(`filtered array: ${filteredOrderList.map(o => o.orderID)}`);
    return (
        <div className="container mx-auto px-4 pt-10" style={{ maxWidth: '1300px' }}>
            <h2 className="font-bold text-3xl mb-4 text-secondary">HELLO, USER!</h2>
            <h2 className="text-3xl mb-4 text-secondary">This is your Dashboard</h2>

            <DashFilter
                fullOrderList={orders}
                setFilteredOrderList={setFilteredOrderList}
            />
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { useState } from 'react';
import TopBar from './TopBar';
import SideBar from './Sidebar';
import LayoutData from '../../data/LayoutData';

const Layout = ({ children }) => {
    const [fullSidebar, setFullSidebar] = useState(false)
    const [page, setPage] = useState(LayoutData[0].url)

    return (
        <div className="flex flex-col h-screen relative">
            <div className='z-20'>
                <TopBar
                    fullSidebar={fullSidebar}
                    setFullSidebar={setFullSidebar}
                />
            </div>
            <div className="flex flex-1 z-10">
                <SideBar
                    fullSidebar={fullSidebar}
                    sideMenu={LayoutData}
                    setPage={setPage}
                />
                <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
                    <div className=''>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
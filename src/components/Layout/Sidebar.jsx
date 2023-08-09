import React from 'react';

const TopBar = ({ fullSidebar, sideMenu, setPage }) => {
    const changePage = (page) => {
        setPage(page);
    };

    return (
        <ul className="sidebar h-full bg-secondary">
            {sideMenu.map((menu, index) => (
                <li key={index} className="sideMenuItem flex h-16">
                    <button
                        onClick={() => changePage(menu.url)}
                        className="sideMenuIcon w-16 mt-5 mb-5 border-none bg-secondary text-white flex justify-center"
                    >
                        {menu.icon}
                    </button>
                    <button
                        onClick={() => changePage(menu.url)}
                        className={`mt-5 mb-5 border-none bg-secondary text-white ${!fullSidebar && 'hidden'} w-40 flex justify-start`}
                    >
                        {menu.name}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TopBar;

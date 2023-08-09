import React from 'react';

const TopBar = ({ fullSidebar, setFullSidebar }) => {
    const changeSidebar = () => {
        setFullSidebar(!fullSidebar);
    };

    return (
        <div className="topBar w-full h-20 flex justify-between items-center shadow-md bg-secondary">
            <div className="flex left-side ml-4">
                <button
                    className="space-y-2 mr-4 md:mr-20 transition duration-300 ease-in-out transform hover:scale-110 active:scale-100"
                    onClick={changeSidebar}
                >
                    <div className={`w-8 h-0.5 bg-white ${fullSidebar && "transform rotate-45 translate-y-2.5"}`}></div>
                    <div className={`w-8 h-0.5 bg-white ${fullSidebar && "opacity-0"}`}></div>
                    <div className={`w-8 h-0.5 bg-white ${fullSidebar && "transform -rotate-45 -translate-y-2.5"}`}></div>
                </button>
                <img className="w-64 h-14" src="https://picsum.photos/250/250" alt="Logo" />
            </div>
            <div className="right-side mr-14">
                <button className="w-12 h-12 rounded-full bg-blue-950 text-white">UB</button>
                <button className="ml-4 text-white">LO</button>
            </div>
        </div>
    );
};

export default TopBar;
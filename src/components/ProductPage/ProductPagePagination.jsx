import React, { useState, useEffect } from 'react';

const ProductPagePagination = ({ fullProductList, setPageProductList }) => {
    const changeButtons = () => {
        let btns = Array.from({ length: 5 }, (_, i) => currentPage + (i - 2));

        btns = btns.filter(btn => btn >= 1 && btn <= pageNumber);

        if (btns[0] > 1) {
            btns.unshift('...');
        }
        if (btns[btns.length - 1] < pageNumber) {
            btns.push('...');
        }

        btns.unshift('<');
        btns.push('>');

        return btns;
    };

    const [pageNumber, setPageNumber] = useState(Math.ceil(fullProductList.length / 12));
    const [currentPage, setCurrentPage] = useState(1);
    const [buttons, setButtons] = useState(changeButtons());

    useEffect(() => {
        const newButtons = changeButtons();
        setButtons(newButtons);

        const startIndex = (currentPage - 1) * 12;
        const endIndex = startIndex + 11;
        const returnArray = fullProductList.slice(startIndex, endIndex + 1);

        setPageProductList(returnArray);
    }, [currentPage, fullProductList]);

    const changePage = (newPgNum) => {
        setCurrentPage(newPgNum);
    };

    const styles = {
        container: 'flex justify-center items-center m-10',
        btn: 'm-1 border border-primary rounded w-10 h-10 text-primary bg-white hover:bg-primary_light',
        centerBtn: 'm-1 border border-primary rounded w-10 h-10 text-white bg-primary',
    };

    return (
        <div className={styles.container}>
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => {
                        if (typeof btn === 'number') {
                            changePage(btn);
                        }
                        else if (btn === '<' && currentPage > 1) {
                            changePage(currentPage-1)
                        }
                        else if (btn === '>' && currentPage < pageNumber) {
                            changePage(currentPage+1)
                        }
                    }}
                    className={btn === currentPage ? styles.centerBtn : styles.btn}
                >
                    {btn}
                </button>
            ))}
        </div>
    );
};

export default ProductPagePagination;

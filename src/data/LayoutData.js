import { FaBox, FaUserAlt } from 'react-icons/fa';
import { IoIosPie } from 'react-icons/io';
import { ImList } from 'react-icons/im';

import { GiMoneyStack } from 'react-icons/gi'; // TOTAL TRANSACIONADO
import { BiMoneyWithdraw } from 'react-icons/bi'; // TOTAL LIQUIDO
import { FaFileInvoiceDollar } from 'react-icons/fa'; // BOLETO
import { FaCreditCard } from 'react-icons/fa'; // CREDITCARD
import { FaMoneyCheckAlt } from 'react-icons/fa'; // DEBITCARD
import { FaMoneyBillWave } from 'react-icons/fa'; // CASH
import { BiTransferAlt } from 'react-icons/bi'; // TRANSAÇÕES
import { FaUserCircle } from 'react-icons/fa'; // USUÁRIO


const LayoutData = [
    {
        icon: <IoIosPie/>,
        name: 'Dashboard',
        url: 'dashboard'
    },
    {
        icon: <FaBox/>,
        name: 'Products',
        url: 'productsList'
    },
    {
        icon: <ImList/>,
        name: 'Products',
        url: 'productsList'
    },
    {
        icon: <FaUserAlt/>,
        name: 'Products',
        url: 'productsList'
    }
]

export default LayoutData;
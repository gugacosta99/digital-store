const orders = [
    {
        orderID: '20000000001-01',
        date: '09/08/2023',
        time: '15:53',
        status: 'paid',
        value: 10.00,
        liquidValue: 7.00,
        client: {
            name: 'Gustavo Henrique',
            phone: '+55 (81) 9 9646-6858',
            email: 'gug994@gmail.com',
            address: {
                country: 'Brazil',
                city: 'Recife',
                postalCode: '51030-030',
                street: 'Professor Augusto Lins e Silva',
                number: '228',
                complement: 'apt 1302'
            }
        },
        items: [
            {
                productID: 0,
                quantity: 2
            }
        ],
        paymentMethod: {
            type: 'creditCard'
        }
    },
    {
        orderID: '20000000002-01',
        date: '04/08/2023',
        time: '15:53',
        status: 'payment-failed',
        value: 10.00,
        liquidValue: 7.00,
        client: {
            name: 'Gustavo Henrique',
            phone: '+55 (81) 9 9646-6858',
            email: 'gug994@gmail.com',
            address: {
                country: 'Brazil',
                city: 'Recife',
                postalCode: '51030-030',
                street: 'Professor Augusto Lins e Silva',
                number: '228',
                complement: 'apt 1302'
            }
        },
        items: [
            {
                productID: 0,
                quantity: 2
            },
            {
                productID: 1,
                quantity: 2
            }
        ],
        paymentMethod: {
            type: 'debitCard'
        }
    },
    {
        orderID: '20000000003-01',
        date: '03/08/2023',
        time: '15:53',
        status: 'paid',
        value: 10.00,
        liquidValue: 7.00,
        client: {
            name: 'Gustavo Henrique',
            phone: '+55 (81) 9 9646-6858',
            email: 'gug994@gmail.com',
            address: {
                country: 'Brazil',
                city: 'Recife',
                postalCode: '51030-030',
                street: 'Professor Augusto Lins e Silva',
                number: '228',
                complement: 'apt 1302'
            }
        },
        items: [
            {
                productID: 1,
                quantity: 2
            }
        ],
        paymentMethod: {
            type: 'creditCard'
        }
    },
    {
        orderID: '20000000004-01',
        date: '19/07/2023',
        time: '15:53',
        status: 'payment-pending',
        value: 10.00,
        liquidValue: 7.00,
        client: {
            name: 'Gustavo Henrique',
            phone: '+55 (81) 9 9646-6858',
            email: 'gug994@gmail.com',
            address: {
                country: 'Brazil',
                city: 'Recife',
                postalCode: '51030-030',
                street: 'Professor Augusto Lins e Silva',
                number: '228',
                complement: 'apt 1302'
            }
        },
        items: [
            {
                productID: 2,
                quantity: 2
            },
            {
                productID: 0,
                quantity: 2
            }
        ],
        paymentMethod: {
            type: 'invoice'
        }
    },{
        orderID: '20000000005-01',
        date: '09/06/2023',
        time: '15:53',
        status: 'paid',
        value: 10.00,
        liquidValue: 7.00,
        client: {
            name: 'Gustavo Henrique',
            phone: '+55 (81) 9 9646-6858',
            email: 'gug994@gmail.com',
            address: {
                country: 'Brazil',
                city: 'Recife',
                postalCode: '51030-030',
                street: 'Professor Augusto Lins e Silva',
                number: '228',
                complement: 'apt 1302'
            }
        },
        items: [
            {
                productID: 9,
                quantity: 2
            }
        ],
        paymentMethod: {
            type: 'creditCard'
        }
    },
];

export default orders;
//module.exports = orders;
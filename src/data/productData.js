const products = [
    {
        id: 0,
        name: 'Computer Science',
        brand: 'Sophia Davis',
        status: 'Active',
        creationDate: '22/05/2021'
    },
    {
        id: 1,
        name: 'Psychology',
        brand: 'Liam Wilson',
        status: 'Active',
        creationDate: '10/10/2021'
    },
    {
        id: 2,
        name: 'Business Administration',
        brand: 'Ava Garcia',
        status: 'Active',
        creationDate: '05/03/2022'
    },
    {
        id: 3,
        name: 'Mechanical Engineering',
        brand: 'Emma Taylor',
        status: 'Active',
        creationDate: '18/07/2021'
    },
    {
        id: 4,
        name: 'Biology',
        brand: 'Olivia Brown',
        status: 'Active',
        creationDate: '30/09/2022'
    },
    {
        id: 5,
        name: 'Economics',
        brand: 'William Jones',
        status: 'Inactive',
        creationDate: '12/12/2022'
    },
    {
        id: 6,
        name: 'English Literature',
        brand: 'Liam Wilson',
        status: 'Active',
        creationDate: '25/01/2023'
    },
    {
        id: 7,
        name: 'Civil Engineering',
        brand: 'Ava Garcia',
        status: 'Active',
        creationDate: '07/06/2022'
    },
    {
        id: 8,
        name: 'Political Science',
        brand: 'Emily Johnson',
        status: 'Active',
        creationDate: '16/04/2022'
    },
    {
        id: 9,
        name: 'Chemistry',
        brand: 'Sophia Davis',
        status: 'Active',
        creationDate: '03/02/2023'
    },
    {
        id: 10,
        name: 'Mathematics',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '29/08/2022'
    },
    {
        id: 11,
        name: 'Sociology',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '14/05/2022'
    },
    {
        id: 12,
        name: 'History',
        brand: 'Noah Anderson',
        status: 'Inactive',
        creationDate: '11/09/2021'
    },
    {
        id: 13,
        name: 'Environmental Science',
        brand: 'Emma Taylor',
        status: 'Inactive',
        creationDate: '06/11/2022'
    },
    {
        id: 14,
        name: 'Electrical Engineering',
        brand: 'William Jones',
        status: 'Inactive',
        creationDate: '23/03/2023'
    },
    {
        id: 15,
        name: 'Physics',
        brand: 'Emily Johnson',
        status: 'Active',
        creationDate: '09/01/2023'
    },
    {
        id: 16,
        name: 'Communication Studies',
        brand: 'William Jones',
        status: 'Inactive',
        creationDate: '28/06/2023'
    },
    {
        id: 17,
        name: 'Art History',
        brand: 'Daniel Martinez',
        status: 'Inactive',
        creationDate: '02/07/2022'
    },
    {
        id: 18,
        name: 'Nursing',
        brand: 'William Jones',
        status: 'Active',
        creationDate: '15/11/2021'
    },
    {
        id: 19,
        name: 'Graphic Design',
        brand: 'Liam Wilson',
        status: 'Active',
        creationDate: '19/06/2023'
    },
    {
        id: 20,
        name: 'Philosophy',
        brand: 'Emma Taylor',
        status: 'Active',
        creationDate: '17/12/2022'
    },
    {
        id: 21,
        name: 'Marketing',
        brand: 'Emily Johnson',
        status: 'Active',
        creationDate: '01/04/2023'
    },
    {
        id: 22,
        name: 'Health Sciences',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '27/10/2022'
    },
    {
        id: 23,
        name: 'International Relations',
        brand: 'Emma Taylor',
        status: 'Active',
        creationDate: '08/08/2022'
    },
    {
        id: 24,
        name: 'Accounting',
        brand: 'Sophia Davis',
        status: 'Active',
        creationDate: '24/03/2022'
    },
    {
        id: 25,
        name: 'Anthropology',
        brand: 'Emma Taylor',
        status: 'Active',
        creationDate: '31/05/2023'
    },
    {
        id: 26,
        name: 'Architecture',
        brand: 'Ava Garcia',
        status: 'Inactive',
        creationDate: '13/09/2021'
    },
    {
        id: 27,
        name: 'Journalism',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '04/08/2021'
    },
    {
        id: 28,
        name: 'Criminal Justice',
        brand: 'Liam Wilson',
        status: 'Active',
        creationDate: '22/01/2023'
    },
    {
        id: 29,
        name: 'Film Studies',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '20/04/2022'
    },
    {
        id: 30,
        name: 'Music',
        brand: 'Noah Anderson',
        status: 'Active',
        creationDate: '07/10/2022'
    },
    {
        id: 31,
        name: 'Education',
        brand: 'William Jones',
        status: 'Active',
        creationDate: '05/02/2022'
    },
    {
        id: 32,
        name: 'Human Resource Management',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '16/03/2023'
    },
    {
        id: 33,
        name: 'Fashion Design',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '18/07/2022'
    },
    {
        id: 34,
        name: 'Geology',
        brand: 'William Jones',
        status: 'Active',
        creationDate: '03/01/2022'
    },
    {
        id: 35,
        name: 'Information Technology',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '30/08/2021'
    },
    {
        id: 36,
        name: 'Public Health',
        brand: 'Noah Anderson',
        status: 'Active',
        creationDate: '12/12/2021'
    },
    {
        id: 37,
        name: 'Biomedical Engineering',
        brand: 'Emma Taylor',
        status: 'Active',
        creationDate: '25/02/2023'
    },
    {
        id: 38,
        name: 'Linguistics',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '28/01/2023'
    },
    {
        id: 39,
        name: 'Chemical Engineering',
        brand: 'Ava Garcia',
        status: 'Active',
        creationDate: '14/11/2021'
    },
    {
        id: 40,
        name: 'Theater Arts',
        brand: 'Sophia Davis',
        status: 'Active',
        creationDate: '06/04/2023'
    },
    {
        id: 41,
        name: 'Environmental Engineering',
        brand: 'John Smith',
        status: 'Active',
        creationDate: '09/06/2023'
    },
    {
        id: 42,
        name: 'Nutrition',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '11/05/2023'
    },
    {
        id: 43,
        name: 'Social Work',
        brand: 'Sophia Davis',
        status: 'Active',
        creationDate: '15/06/2021'
    },
    {
        id: 44,
        name: 'Astronomy',
        brand: 'Ava Garcia',
        status: 'Active',
        creationDate: '29/04/2023'
    },
    {
        id: 45,
        name: 'Sports Management',
        brand: 'Daniel Martinez',
        status: 'Active',
        creationDate: '01/09/2022'
    },
    {
        id: 46,
        name: 'Spanish',
        brand: 'Sophia Davis',
        status: 'Inactive',
        creationDate: '27/06/2022'
    },
    {
        id: 47,
        name: 'Industrial Design',
        brand: 'Liam Wilson',
        status: 'Active',
        creationDate: '20/07/2023'
    }
];

export default products;
//module.exports = products
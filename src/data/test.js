const products = []

const randomDates = [
    "22/05/2021",
    "10/10/2021",
    "05/03/2022",
    "18/07/2021",
    "30/09/2022",
    "12/12/2022",
    "25/01/2023",
    "07/06/2022",
    "16/04/2022",
    "03/02/2023",
    "29/08/2022",
    "14/05/2022",
    "11/09/2021",
    "06/11/2022",
    "23/03/2023",
    "09/01/2023",
    "28/06/2023",
    "02/07/2022",
    "15/11/2021",
    "19/06/2023",
    "17/12/2022",
    "01/04/2023",
    "27/10/2022",
    "08/08/2022",
    "24/03/2022",
    "31/05/2023",
    "13/09/2021",
    "04/08/2021",
    "22/01/2023",
    "20/04/2022",
    "07/10/2022",
    "05/02/2022",
    "16/03/2023",
    "18/07/2022",
    "03/01/2022",
    "30/08/2021",
    "12/12/2021",
    "25/02/2023",
    "28/01/2023",
    "14/11/2021",
    "06/04/2023",
    "09/06/2023",
    "11/05/2023",
    "15/06/2021",
    "29/04/2023",
    "01/09/2022",
    "27/06/2022",
    "20/07/2023"
];

const personNames = [
    "John Smith",
    "Emily Johnson",
    "Sophia Davis",
    "Daniel Martinez",
    "Olivia Brown",
    "Liam Wilson",
    "Emma Taylor",
    "Noah Anderson",
    "Ava Garcia",
    "William Jones"
];

const bachelorCourses = [
    "Computer Science",
    "Psychology",
    "Business Administration",
    "Mechanical Engineering",
    "Biology",
    "Economics",
    "English Literature",
    "Civil Engineering",
    "Political Science",
    "Chemistry",
    "Mathematics",
    "Sociology",
    "History",
    "Environmental Science",
    "Electrical Engineering",
    "Physics",
    "Communication Studies",
    "Art History",
    "Nursing",
    "Graphic Design",
    "Philosophy",
    "Marketing",
    "Health Sciences",
    "International Relations",
    "Accounting",
    "Anthropology",
    "Architecture",
    "Journalism",
    "Criminal Justice",
    "Film Studies",
    "Music",
    "Education",
    "Human Resource Management",
    "Fashion Design",
    "Geology",
    "Information Technology",
    "Public Health",
    "Biomedical Engineering",
    "Linguistics",
    "Chemical Engineering",
    "Theater Arts",
    "Environmental Engineering",
    "Nutrition",
    "Social Work",
    "Astronomy",
    "Sports Management",
    "Spanish",
    "Industrial Design"
];

for (let i=0; i < 48; i++){
    const randomIndex = Math.floor(Math.random() * personNames.length);
    const randomValue = Math.random();

    let x = {
        id: i,
        name: bachelorCourses[i],
        brand: personNames[randomIndex],
        status: randomValue < 0.7 ? "Active" : "Inactive",
        creationDate: randomDates[i]
    }

    products.push(x)
}

console.log(products)
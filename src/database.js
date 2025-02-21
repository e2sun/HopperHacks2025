export default class Database {
    constructor() {
        this.data = {
            User: [ 
                { // User 1
                    firstName: 'Evelyn',
                    lastName: 'Sun',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    minor: [],
                    specialization: ['Artifical Intelligence'],
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: ''
                },
                { //User 2
                    firstName: 'Malia',
                    lastName: 'Ng',
                    year: 'Sophomore',
                    major: 'Information Systems',
                    minor:['Digital Arts'],
                    specialization: [],
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: '',
                    email: ''

                },
                { //User 3
                    firstName: 'Charlotte',
                    lastName: 'Cain',
                    year: 'Sophomore',
                    major: ['Computer Science', 'Applied Math and Statistics'],
                    minor: [],
                    specialization: [],
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: '',
                    email: ''
                },
                { //User 4
                    firstName: 'Esther',
                    lastName: 'Wang',
                    year: 'Sophomore',
                    major: ['Information Systems'],
                    minor: [],
                    specialization: [],
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: '',
                    email: ''
                }
            ],
        }; // End this.data object
    } // End constructor()
} // End class Database

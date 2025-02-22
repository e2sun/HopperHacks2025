export default class Database {
    constructor() {
        this.data = {
            User: [ 
                { // User 1
                    firstName: 'Evelyn',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: ''
                },
                { //User 2
                    firstName: 'Malia',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Information Systems',
                    description: 'About me',
                    personality: "", // Example personality value
                    phone_number: '',
                    email: ''

                },
                { //User 3
                    firstName: 'Charlotte',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'About me',
                    phone_number: '',
                    email: ''
                },
                { //User 4
                    firstName: 'Esther',
                    lastName: '',
                    year: 'Sophomore',
                    major: ['Information Systems'],
                    description: 'About me',
                    phone_number: '',
                    email: ''
                }
            ],
        }; // End this.data object
    } // End constructor()
} // End class Database

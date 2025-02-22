export default class Database {
    constructor() {
        this.data = {
            user: [ 
                { // User 1
                    firstName: 'Evelyn',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'About me',
                    insta: '',
                    email: '',
                    userResults: 1
                },
                { //User 2
                    firstName: 'Malia',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Information Systems',
                    description: 'About me',
                    insta: '',
                    email: '',
                    userResults: 2
                },
                { //User 3
                    firstName: 'Charlotte',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'About me', 
                    insta: '',
                    email: '',
                    userResults: 3
                },
                { //User 4
                    firstName: 'Esther',
                    lastName: '',
                    year: 'Sophomore',
                    major: ['Information Systems'],
                    description: 'About me',
                    insta: '',
                    email: '',
                    userResults: 4
                }
            ],
        }; // End this.data object
    } // End constructor()
} // End class Database

export default class Database {
    constructor() {
        this.data = {
            modelUsers: [ 
                { // User 1
                    firstName: 'Evelyn',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'I helped make this website!!',
                    insta: '',
                    email: 'evelyn@seawolf.net',
                    userResults: 1
                },
                { //User 2
                    firstName: 'Malia',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Information Systems',
                    description: 'I helped make this website!!',
                    insta: '',
                    email: 'malia@seawolf.net',
                    userResults: 2
                },
                { //User 3
                    firstName: 'Charlotte',
                    lastName: '',
                    year: 'Sophomore',
                    major: 'Computer Science',
                    description: 'I helped make this website!!', 
                    insta: '',
                    email: 'charlotte@seawolf.net',
                    userResults: 3
                },
                { //User 4
                    firstName: 'Esther',
                    lastName: '',
                    year: 'Sophomore',
                    major: ['Information Systems'],
                    description: 'I helped make this website!!',
                    insta: '',
                    email: 'esther@seawolf.net',
                    userResults: 4
                }
            ],
        }; // End this.data object
    } // End constructor()
} // End class Database

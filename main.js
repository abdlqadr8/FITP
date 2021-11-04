let user = {
    name: 'Abdul',
    age: 27,
    location: 'Bauchi',
    email: 'abdlqadr8@gmail.com',
    hobby: [
        {title: 'coding', frequency: 20},
        {title: 'skating', frequency: 30},
        {title: 'designing', frequency: 70},
        {title: 'sleeping', frequency: 60}
    ],

    output(){
        console.log(`My name is ${this.name}, I'm ${this.age}, I live in ${this.location} and my email address: ${this.email}`);
        console.log('List of my hobby: ');
        this.hobby.forEach(hobs => {
            console.log(`${hobs.title}, freq: ${hobs.frequency}`);
        });

    }
};
user.output();
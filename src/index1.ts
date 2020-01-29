import { User } from './models/User';

const user = new User({name: 'cliff', age: 56});

console.log(user.get('name'));
console.log(user.get('age'));

user.set({name: 'phoebe', age:10});

console.log(user.get('name'));
console.log(user.get('age'));


user.set({name: 'daisi'});

console.log(user.get('name'));
console.log(user.get('age'));

user.on('change', () => {
    console.log('change #1');
});
user.on('change', () => {
    console.log('change #2');
});
user.on('save', () => {
    console.log("Save was triggered")
});

//user.trigger('change');
user.trigger('save');
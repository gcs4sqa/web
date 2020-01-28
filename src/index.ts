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

user.on('change', () => {});
user.on('change', () => {});
user.on('cliff', () => {});

console.log(user);
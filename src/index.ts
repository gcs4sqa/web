import { User } from './models/User';



const user = new User({id: 1, name:'newer user2', age:21});



user.on('save', () => {
    console.log(user);
});

user.save();




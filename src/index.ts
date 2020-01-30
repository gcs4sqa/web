import { User } from './models/User';

const user = new User({id:1});

const newUser = new User({name: "new user", age: 0});

user.fetch();

setTimeout(() => {
    console.log(user);
},4000);

user.set({name: "NEW NAME", age: 9999});

user.save(); 

newUser.save();



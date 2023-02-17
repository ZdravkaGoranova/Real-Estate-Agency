const mongoose = require('mongoose');


const userShema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required!'],
        
    },
    username: {
        type: String,
        minLength: 5, 

        required: [true, 'username is required!'],

    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: 4,
    },

});

//userShema.virtual('confirmPassword').set;

const User = mongoose.model('User', userShema);

module.exports = User;



  // }, {
    //     virtuals: {
    //         confirmPassword: {
    //             set(value) {
    //                 if (this.password !== value) {
    //                     throw new mongoose.Error('Password missmatch!');
    //                 }
    //             }
    //         }
    //     }

//});

//userShema.virtual('confirmPassword').set;
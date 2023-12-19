import mongoose from 'mongoose';


const userSchema = new mongoose.Schema( {

  name: {
    type: String,
    required: [ true, 'Name is required' ]
  },
  lastName: {
    type: String,
    required: [ true, 'lastName is required' ]
  },
  email: {
    type: String,
    required: [ true, 'Email is required' ],
    unique: true,
  },
  emailValidated: {
    type: Boolean,
    default: false,
  },

} );


export const UserModel = mongoose.model('User', userSchema);


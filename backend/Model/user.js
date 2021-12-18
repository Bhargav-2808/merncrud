import  mongoose  from "mongoose";
//import autoincrement, { initialize }  from 'mongoose-auto-increment'

const userSchema = mongoose.Schema(
    {
        name: String,
        age: Number ,
        email: String ,
        mobile: Number,
    }
)

//autoincrement.initialize(mongoose.connection);
//userSchema.plugin(autoincrement.plugin(), 'postuser');
const postUser = mongoose.model('user',userSchema);
export default postUser;
const {model, Schema} = require ('mongoose')

const UserSchema = new Schema (
    {
        id:{
            type:Number,
            unique:true,
            required:[true,"Id is required"],
            maxlength:[9,"maximun 9 characters"],
            minlength:[3,"minimun 3 characters"]
        },

        username:{
            type:String,
            required:[true,"User name is required"]
        },

        email:{
            type:String,
            required:[true,"Email is required"],
            unique:[true,"Email does exist"],
            minlength:[5,"Please enter a valid email"]
        }
    }
)

module.exports = model('User', UserSchema, 'Users')
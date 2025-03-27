const {model, Schema} = require ('mongoose')

const UserSchema = new Schema (
    {
        
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
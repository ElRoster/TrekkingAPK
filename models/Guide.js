const {model, Schema} = require ('mongoose')

const SchemaGuide = new Schema(
    {
        id:{
            type:Number,
            required:[true,"Id is required"],
            unique:[true,"Id is must be unique"],
            maxlength:[9,"maximum 9 characters"],
            minlength:[3,"minimum 3 characters"]
        },

        nit:{
            type:Number,
            required:[true,"Nit is required"],
            unique:[true,"Nit is must be unique"],
            maxlength:[15,"maximum 15 characters"],
            minlength:[0,"Nit is invalid"]
        },

        name:{
            type:String,
            required:[true,"Name is required"],
            maxlength:[50,"maximum 50 characters"],
            minlength:[1,"minimum 1 characters"]
        },

        lastname:{
            type:String,
            required:[true,"Last Name is required"],
            maxlength:[50,"maximum 50 characters"],
            minlength:[1,"minimum 1 characters"]
        },

        email:{
            type:String,
            required:[true,"Email is required"],
            unique:[true,"Email is must be unique"],
            maxlength:[50,"maximum 50 characters"],
            minlength:[5,"minimum 5 characters"],
        },

        cellphone:{
            type:Number,
            required:[true,"Cellphone is required"],
            maxlength:[15,"maximum 15 characters"],
            minlength:[10,"minimum 10 characters"]
        },

        state:{
            type:String,
            required:[true,"State is required"]
        }
    }
)

module.exports = model('Guide', SchemaGuide, 'Guides')
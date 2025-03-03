const mongoose = require('mongoose')

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connected to Trekking Sancristobal Database');

    }catch (error){
        console.error('Something went wrong', error, message)
    }
}

module.exports= dbConnect()
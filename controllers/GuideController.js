const Guide = require('../models/Guide')

const getGuide = async  (req, res)=>{
    const Guides = await Guide.find()

    res.json(Guides)
}

const postGuide = async (req,res)=>{
    let msg = 'Guide inserted successfully'
    const body = req.body

    try{
        const guide = new Guide(body)
        await guide.save()

    }
    catch (error){
        msg = error
    }

    res.json({msg:msg})
}


const putGuide= async (req, res)=>{
    let msg = 'Guide updated'
    const {id, nit, name, lastname, email, cellphone, state } = req.body
    try {
        await findOneAndUpdate({id:id}, {nit:nit , name:name, email:email, lastname:lastname, cellphone:cellphone, state:state})
    }catch (error){
        msg = error
    }
    res.json({msg:msg})
}

const deleteGuide = async (req,res)=>{
    let msg = 'Guide deleted'
    id = req.params.id
    try {
        await findOneAndDelete({_id:id})
    }catch (error){
        msg = 'There was an error deleting the Guide'
    }
    res.json({msg:msg})
}


module.exports = {
    postGuide,
    getGuide,
    putGuide,
    deleteGuide
}
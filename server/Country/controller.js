const Country = require('./Country');

const getAllContries = async(req , res ) =>{
    const data = await Country.find();
    res.status(200).send({data});
}

module.exports = {
    getAllContries
}
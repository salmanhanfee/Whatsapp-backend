import mongoose from 'mongoose'

const whastappSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

//collection
export default mongoose.model('messagecontents',whastappSchema)
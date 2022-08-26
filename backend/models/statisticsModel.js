const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const statisticsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    views: { 
        type: Number,
        required: false
    },
    clicks: { 
        type: Number,
        required: false
    },
    cost: { 
        type: Number,
        required: false
    },
},{timestamps: true});

module.exports = mongoose.model('Statistics', statisticsSchema)

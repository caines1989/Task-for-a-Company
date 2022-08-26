const Statistics = require('../models/statisticsModel')

// get all statistics
const getAllStatistics = async (req, res) => {
    const statistics = await getAllStatistics.find({}).sort({createdAt: -1})

    res.status(200).json(statistics)
}

// get a single statistic
const getSingleStatistic = async (req, res) => {
    const { id } = req.params
    
    const singleStatistic = await getAllStatistics.findById(id)

    if (!singleStatistic) {
        return res.status(404).json({ error:'No Stats here'})
    }

    res.status(200).json(singleStatistic)
}

// create a new statistic
const createStatistic = async (req, res) => {
    const {title, views, clicks, cost} = req.body


    // add doc to db
    try {
        const statistics = await getAllStatistics.create({title, views, clicks, cost})
        res.status(200).json(statistics)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete a single statistic

// update a statistic

module.exports = {
    createStatistic ,
    getAllStatistics ,
    getSingleStatistic
}
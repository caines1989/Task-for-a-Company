const express = require('express')
const { createStatistic , getAllStatistics ,
    getSingleStatistic } = require('../controllers/statisticsController')


const router = express.Router()

// get all statistics
router.get('/', getAllStatistics)

// get a single statistic
router.get('/:id', getSingleStatistic)

// post a new statistic
router.post('/', createStatistic)

// delete a statistic
router.delete('/:id' ,(req, res) => {
    res.json({mssg: 'Delete a new Statistic'})
})

// update a statistic
router.patch('/:id' ,(req, res) => {
    res.json({mssg: 'Update a Statistic'})
})

module.exports = router
const express = require("express");
const {
  createStatistic,
  getAllStatistics,
  getSingleStatistic,
  deleteStatistic,
  updateStatistic,
} = require("../controllers/statisticsController");

const router = express.Router();

// get all statistics
router.get("/", getAllStatistics);

// get a single statistic
router.get("/:id", getSingleStatistic);

// post a new statistic
router.post("/", createStatistic);

// delete a statistic
router.delete("/:id", deleteStatistic);

// update a statistic
router.patch("/:id", updateStatistic);

module.exports = router;

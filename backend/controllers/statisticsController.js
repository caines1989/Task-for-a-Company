const Statistics = require("../models/statisticsModel");
const mongoose = require("mongoose");

// get all statistics
const getAllStatistics = async (req, res) => {
  const statistics = await Statistics.find({}).sort({ createdAt: -1 });

  res.status(200).json(statistics);
};

// get a single statistic
const getSingleStatistic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such statistic" });
  }

  const singleStatistic = await Statistics.findById(id);

  if (!singleStatistic) {
    return res.status(404).json({ error: "No Stats here" });
  }

  res.status(200).json(singleStatistic);
};

// create a new statistic
const createStatistic = async (req, res) => {
  const { views, clicks, cost } = req.body;

  // add doc to db
  try {
    const statistics = await Statistics.create({ views, clicks, cost });
    res.status(200).json(statistics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a single statistic
const deleteStatistic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such statistic" });
  }

  const statistic = await Statistics.findOneAndDelete({ _id: id });

  if (!statistic) {
    return res.status(404).json({ error: "No Stats here" });
  }

  res.status(200).json(statistic);
};

// update a statistic
const updateStatistic = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such statistic" });
  }

  const statistic = await Statistics.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!statistic) {
    return res.status(400).json({ error: "No Stats here" });
  }

  res.status(200).json(statistic);
};

module.exports = {
  createStatistic,
  getAllStatistics,
  getSingleStatistic,
  deleteStatistic,
  updateStatistic,
};

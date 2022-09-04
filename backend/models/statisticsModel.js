const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const statisticsSchema = new Schema(
  {
    views: {
      type: Number,
      required: true,
    },
    clicks: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Statistics", statisticsSchema);

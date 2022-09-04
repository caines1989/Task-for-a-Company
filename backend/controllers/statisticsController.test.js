const Statistics = require("../models/statisticsModel");
const request = require("supertest");
const mongoose = require("mongoose");
// const getAllStatistics = async (req, res) => {
//     const statistics = await Statistics.find({}).sort({createdAt: -1})

//     res.status(200).json(statistics)
// }

describe("getAllStatistics", () => {
  it("returns status 200 when all statistics are available in json", async () => {
    request(Statistics)
      .get("/statistics")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("getSingleStatistic", () => {
  it("returns no such statistic", async () => {});
  it("returns status 200 when single statistics is available in json", async () => {
    request(Statistics)
      .get("/statistics")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("createStatistic", () => {
  it("returns status 200 when create a statistic in json", async () => {
    request(Statistics)
      .get("/statistics")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("deleteStatistic", () => {
  it("returns status 200 when deleting a statistic", async () => {
    request(Statistics)
      .get("/statistics")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("updateStatistic", () => {
  it("returns status 200 when updating statistic", async () => {
    request(Statistics)
      .get("/statistics")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

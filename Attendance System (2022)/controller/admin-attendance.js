const AdminAttendance = require("../models/AdminAttendance");
const error = require("../utils/error");

const getEnable = async (_req, res, next) => {
  try {
    const running = await AdminAttendance.findOne({ status: "RUNNING" });
    if (running) {
      throw error("Already running", 400);
    }

    const attendance = new AdminAttendance({});
    await attendance.save();
    return res.status(201).json({ message: "Success", attendance });
  } catch (e) {
    next(e);
  }
};

const getStatus = async (_req, res, next) => {
  try {
    const running = await AdminAttendance.findOne({ status: "RUNNING" });

    if (!running) {
      throw error("Not running", 400);
    }

    return res.status(200).json(running);
  } catch (e) {
    next(e);
  }
};

const getDisable = (req, res, next) => {};

module.exports = { getEnable, getDisable, getStatus };

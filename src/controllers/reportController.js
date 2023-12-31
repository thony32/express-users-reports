const Reports = require("../models/reportModel")

// NOTE: Create a report
exports.createReport = function (req, res) {
  let newReport = new Reports(req.body)
  Reports.createReport(newReport, function (err, user) {
    if (err) res.send(err)
    res.json(user)
  })
}

// NOTE: Get a single report by id
exports.getReport = function (req, res) {
  Reports.getReport(req.params.reportId, function (err, report) {
    if (err) res.send(err)
    res.json(report)
  })
}

// NOTE: Get all reports
exports.getAllReports = function (req, res) {
  Reports.getAllReports(function (err, reports) {
    if (err) res.send(err)
    console.log("res", reports)
    res.send(reports)
  })
}

const express = require('express');
const { Station, BusStationIntersection } = require('../models');
const { parseRawData } = require('../utilities');

const router = express.Router();

router.get('/', async (req, res) => {
  const { attr, dir } = req.query;
  let stations = await Station.findAll({
    attributes: [
      'name',
      'stopID',
      'enterFare',
      'closedStatus',
      'isTrain',
    ],
    include: [{
      model: BusStationIntersection,
      attributes: ['intersection']
    }],
    raw: true
  })
  stations = parseRawData(stations);
  res.send(JSON.stringify(stations));
});

router.post('/', async (req, res) => {
  const {
    stopId,
    name,
    enterFare,
    closedStatus,
    isTrain,
    intersection
  } = req.body;
  try {
    const station = await Station.create({
      stopId,
      name,
      enterFare,
      closedStatus,
      isTrain
    });
    if (!station.isTrain) {
      await BusStationIntersection.create({
        stopId,
        intersection
      })
    }
    res.send({ success: true })
  } catch(error) {
    res.send(error);
  }
});

router.put('/:stopId', async (req, res) => {
  const stopId = req.params.stopId;
  const {
    enterFare,
    closedStatus,
    isTrain,
    intersection
  } = req.body;
  try {
    await Station.update({
      enterFare,
      closedStatus
    }, {
      where: { stopId }
    });
    if (!isTrain) {
      BusStationIntersection.update({
        intersection
      }, {
        where: { stopId }
      })
    }
    res.send({ success: true })
  } catch(error) {
    res.send(error);
  }
});

module.exports = router;
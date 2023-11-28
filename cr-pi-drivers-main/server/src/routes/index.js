// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { getDriver } = require('../controllers/getDriver');
const { getDetail } = require('../controllers/getDetail');
const { getDriversByName } = require('../controllers/getDriverByName');
const { postDriver } = require('../controllers/postDriver');
const { getAllTeams } = require('../controllers/getAllTeams');


router.get('/drivers', getDriver);

router.get('/drivers/name', getDriversByName);

router.get('/drivers/:id', getDetail);

router.post('/drivers', postDriver);

router.get('/teams', getAllTeams);



module.exports = {router};

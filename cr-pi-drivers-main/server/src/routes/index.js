// const { Router } = require("express");
const express = require('express');
const router = express.Router();
const { getDriver } = require('../controllers/getDriver');
const { getDetail } = require('../controllers/getDetail');
const { getDriversByName } = require('../controllers/getDriverByName');
const { postDriver } = require('../controllers/postDriver');
const { getAllTeams } = require('../controllers/getAllTeams');


router.get('/', getDriver);

router.get('/:id', getDetail);

router.get('/', getDriversByName);

router.post('/', postDriver);

router.get('/teams', getAllTeams);



module.exports = {router};

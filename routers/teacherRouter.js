const express = require('express');
const { getScore, sendScore } = require('../controllers/teacherController.js');
const router = express.Router();

router.route('/get-score').get(getScore);
router.route('/send-score').post(sendScore);

module.exports = router;

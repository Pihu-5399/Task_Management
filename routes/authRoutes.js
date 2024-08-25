const express = require('express');
const { register, login } = require('../controllers/authController.js');

const router = express.Router();
router.get("/", (req, res) => {
    res.send("API is working")
})
router.post('/register', register);
router.post('/login', login);

module.exports = router;

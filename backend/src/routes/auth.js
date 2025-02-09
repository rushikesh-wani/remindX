const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.get("/google", authController);

module.exports = router;

const express = require("express");
const router = express.Router();

// @route       GET api/auth
// @desc        Get logged in user
// @access      Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route       POST api/auth
// @desc        Auth user & get Token
// @access      Public
router.post("/", (req, res) => {
  res.send("Log in a User");
});

module.exports = router;

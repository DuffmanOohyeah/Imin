"use strict";

const express = require("express");
const router = express.Router();
const config = require("../config/config");

router.get("/", (req, res) => {
  res.send(`
    ${config.htmHead()}
    ${config.htmFoot()}
  `);
});

module.exports = router;

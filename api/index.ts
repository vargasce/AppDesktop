'use strict'

const express = require("express");
const app = require("./app");
const host = 'http://localhost';
const port = 3000;

const server = app.listen(port, () => {
  console.log(`[*]SERVER ${host}:${port}`);
});

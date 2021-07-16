const express = require("express");
const HelpTicket = require("../model/help.model");
const helpController = require("../controller/help.controller");

function routes() {
  const helpRoute = express.Router();
  const controller = helpController(HelpTicket);

  helpRoute
    .route("/tickets")
    .get(controller.getTickets)
    .post(controller.saveTicket);

  return helpRoute;
}

module.exports = routes;

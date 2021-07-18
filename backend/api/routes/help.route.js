//Author: Jay Patel (B00881906)
const express = require("express");
const HelpTicket = require("../model/help.model");
const helpController = require("../controller/help.controller");
const helpMiddleware = require("../middleware/help.middleware");

function routes() {
  const helpRoute = express.Router();
  const controller = helpController(HelpTicket);
  const middleware = helpMiddleware(HelpTicket);

  helpRoute.route("/admin/tickets").get(controller.getAllTickets);

  helpRoute
    .route("/tickets")
    .get(controller.getTickets)
    .post(controller.saveTicket);

  // Middleware for /tickets/:ticketId API
  helpRoute.use("/tickets/:ticketId", middleware.helpTicketFinderMiddleware);

  helpRoute.route("/tickets/:ticketId").put(controller.updateTicket);

  return helpRoute;
}

module.exports = routes;

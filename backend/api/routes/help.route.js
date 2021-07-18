//Author: Jay Patel (B00881906)
const express = require("express");
const HelpTicket = require("../model/help.model");
const helpController = require("../controller/help.controller");

function routes() {
  const helpRoute = express.Router();
  const controller = helpController(HelpTicket);

  helpRoute.route("/admin/tickets").get(controller.getAllTickets);

  helpRoute
    .route("/tickets")
    .get(controller.getTickets)
    .post(controller.saveTicket);

  // Middleware for /tickets/:ticketId API
  helpRoute.use("/tickets/:ticketId", (req, res, next) => {
    const { ticketId } = req.params;
    HelpTicket.findById(ticketId, (err, ticket) => {
      if (err) {
        return res.send(err);
      }
      if (ticket) {
        req.ticket = ticket;
        return next();
      }
      return res.sendStatus(404);
    });
  });

  helpRoute.route("/tickets/:ticketId").put(controller.updateTicket);

  return helpRoute;
}

module.exports = routes;

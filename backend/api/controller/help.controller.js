//Author: Jay Patel (B00881906)
const { sendTicketUpdateEmail } = require("../utils/emailClient");

function helpController(HelpTicket) {
  function getTickets(req, res) {
    if (!req.query.email) {
      res.status(400);
      return res.send("User email is required");
    }

    HelpTicket.find({ email: req.query.email }, (err, tickets) => {
      if (err) {
        return res.send(err);
      }
      return res.json(tickets);
    });
  }

  function getAllTickets(req, res) {
    HelpTicket.find((err, tickets) => {
      if (err) {
        return res.send(err);
      }
      return res.json(tickets);
    });
  }

  function saveTicket(req, res) {
    const ticket = new HelpTicket(req.body);

    if (!req.body.reason) {
      res.status(400);
      return res.send("Reason is required");
    }
    if (!req.body.messages) {
      res.status(400);
      return res.send("Messages is required");
    }
    if (!req.body.email) {
      res.status(400);
      return res.send("Email is required");
    }

    ticket.save();
    sendTicketUpdateEmail(
      req.body.email,
      req.body.messages[0].name,
      `New ticket created - ${req.body.reason}`,
      "You have created new support ticket created with the following message:",
      req.body.messages[0].text
    );
    res.status(201);
    return res.json(ticket);
  }

  function updateTicket(req, res) {
    const { ticket } = req;
    ticket.reason = req.body.reason;
    ticket.messages = req.body.messages;
    ticket.email = req.body.email;
    ticket.status = req.body.status;
    ticket.save((err) => {
      if (err) {
        return res.send(err);
      }
      sendTicketUpdateEmail(
        req.body.messages[0].author,
        req.body.messages[0].name,
        `Update on your ticket - ${req.body.reason}`,
        `There is a new comment on your ticket by 
          ${
            req.body.messages[req.body.messages.length - 1].name ===
            req.body.messages[0].name
              ? "you"
              : req.body.messages[req.body.messages.length - 1].name
          }`,
        req.body.messages[req.body.messages.length - 1].text
      );
      return res.json(ticket);
    });
  }

  return { getTickets, saveTicket, getAllTickets, updateTicket };
}

module.exports = helpController;

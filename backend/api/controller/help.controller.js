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
    res.status(201);
    return res.json(ticket);
  }

  return { getTickets, saveTicket };
}

module.exports = helpController;

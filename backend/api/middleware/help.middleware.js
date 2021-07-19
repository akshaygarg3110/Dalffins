//Author: Jay Patel (B00881906)
function helpMiddleware(HelpTicket) {
  function helpTicketFinderMiddleware(req, res, next) {
    const { ticketId } = req.params;
    HelpTicket.findById({ _id: ticketId }, (err, ticket) => {
      if (err) {
        return res.send(err);
      }
      if (ticket) {
        req.ticket = ticket;
        return next();
      }
      return res.sendStatus(404);
    });
  }

  return { helpTicketFinderMiddleware };
}

module.exports = helpMiddleware;

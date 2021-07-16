import React, { Component } from "react";
import "./TicketListView.scss";
import { Row } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";

class TicketListView extends Component {
  render() {
    const { tickets, isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="d-flex align-items-center justify-content-center mt-3">
          <CircularProgress />
        </div>
      );
    }

    return (
      <div className="ticket-list-view-content container mt-3">
        <Row className="cards">
          {tickets.length > 0 ? (
            tickets.map((item, index) => (
              <div className="card">
                <h5>{`${index + 1}. ${item.reason}`}</h5>
                <span className="desc">{item.description}</span>
                <div className="d-flex mt-2 justify-content-between">
                  <span className="s">{item.status}</span>
                  <span className="c">{item.createdAt}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No support tickets found.</p>
          )}
        </Row>
      </div>
    );
  }
}

export default TicketListView;

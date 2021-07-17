import React, { Component } from "react";
import "./TicketListView.scss";
import { Row } from "react-bootstrap";
import CircularProgress from "@material-ui/core/CircularProgress";
import TicketDetailModal from "../TicketDetailModal/TicketDetailModal";

class TicketListView extends Component {
  state = {
    openTicketDetailDialog: false,
    selectedTicket: undefined,
  };

  onTicketClickHandler = (ticket) => {
    this.setState({
      openTicketDetailDialog: true,
      selectedTicket: ticket,
    });
  };

  handleOnTicketDialogClose = () => {
    this.setState({ openTicketDetailDialog: false, selectedTicket: undefined });
  };

  render() {
    const { tickets, isLoading } = this.props;
    const { openTicketDetailDialog, selectedTicket } = this.state;

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
              <div
                className="card"
                onClick={() => this.onTicketClickHandler(item)}
              >
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

        <TicketDetailModal
          show={openTicketDetailDialog}
          ticket={selectedTicket}
          onClose={this.handleOnTicketDialogClose}
        />
      </div>
    );
  }
}

export default TicketListView;

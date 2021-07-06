import React, { Component } from "react";
import "./Help.scss";
import { Button, Col, Row } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import NewSupportTicketModal from "../../components/Help/NewSupportTicketModal/NewSupportTicketModal";

class Help extends Component {
  state = {
    newSupportTicketModalVisibility: false,
    tickets: [
      {
        reason: "Technical Issue",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut consequuntur deleniti alias, ea ratione unde excepturi soluta perspiciatis eligendi distinctio error exercitationem, sint consequatur labore quidem omnis! Autem, incidunt.",
        createdAt: "12th Jun 2021, 5:42 PM",
        status: "OPEN",
      },
      {
        reason: "Customer Complaint",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut consequuntur deleniti alias, ea ratione unde excepturi soluta perspiciatis eligendi distinctio error exercitationem, sint consequatur labore quidem omnis! Autem, incidunt.",
        createdAt: "11th Jun 2021, 1:12 PM",
        status: "CLOSED",
      },
      {
        reason: "Payment Issue",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut consequuntur deleniti alias, ea ratione unde excepturi soluta perspiciatis eligendi distinctio error exercitationem, sint consequatur labore quidem omnis! Autem, incidunt.",
        createdAt: "9th Jun 2021, 3:11 PM",
        status: "RESOLVED",
      },
    ],
  };

  openNewSupportTicketModal = () => {
    this.setState({ newSupportTicketModalVisibility: true });
  };

  handleOnModalClose = () => {
    this.setState({ newSupportTicketModalVisibility: false });
  };

  render() {
    const { tickets, newSupportTicketModalVisibility } = this.state;

    return (
      <div className="help-container container">
        <Row>
          <Col>
            <h1>Support Requests</h1>
          </Col>
          <Col className="text-right my-auto">
            <Button
              className="btn-new-request"
              onClick={this.openNewSupportTicketModal}
            >
              <AddIcon /> Raise a new support request
            </Button>
          </Col>
        </Row>

        <div className="container mt-3">
          <Row className="cards">
            {tickets.map((item, index) => (
              <div className="card">
                <h5>{`${index + 1}. ${item.reason}`}</h5>
                <span className="desc">{item.description}</span>
                <div className="d-flex mt-2 justify-content-between">
                  <span className="s">{item.status}</span>
                  <span className="c">{item.createdAt}</span>
                </div>
              </div>
            ))}
          </Row>
        </div>

        <NewSupportTicketModal
          show={newSupportTicketModalVisibility}
          onClose={this.handleOnModalClose}
        />
      </div>
    );
  }
}

export default Help;

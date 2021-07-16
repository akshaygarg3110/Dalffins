import React, { Component } from "react";
import "./Help.scss";
import { Button, Col, Row } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import NewSupportTicketModal from "../../components/Help/NewSupportTicketModal/NewSupportTicketModal";
import { fetchTicketsApi } from "../../utils/Api";

class Help extends Component {
  state = {
    newSupportTicketModalVisibility: false,
    tickets: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets = () => {
    const data = {
      params: {
        email: "Jp9573@gmail.com",
      },
    };
    fetchTicketsApi(data)
      .then((res) => {
        let tickets = res.data.map((item) => {
          return { ...item, description: item.messages[0].text };
        });
        this.setState({ tickets, isLoading: false });
      })
      .catch((err) => {
        console.error(err.message);
        this.setState({ isLoading: false });
      });
  };

  openNewSupportTicketModal = () => {
    this.setState({ newSupportTicketModalVisibility: true });
  };

  handleOnModalClose = () => {
    this.fetchTickets();
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

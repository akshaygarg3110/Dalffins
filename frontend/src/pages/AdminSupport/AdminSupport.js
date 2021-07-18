//Author: Jay Patel (B00881906)
import React, { Component } from "react";
import "./AdminSupport.scss";
import { Col, Row } from "react-bootstrap";
import { fetchAllTicketsApi } from "../../utils/Api";
import { Redirect } from "react-router-dom";
import TicketListView from "../../components/Help/TicketListView/TicketListView";

class AdminSupport extends Component {
  state = {
    tickets: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchTickets();
  }

  fetchTickets = () => {
    fetchAllTicketsApi()
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

  render() {
    if (!localStorage.getItem("isAdmin")) {
      return <Redirect to="/admin/login" />;
    }

    const { tickets, isLoading } = this.state;

    return (
      <div className="admin-support-container container">
        <Row>
          <Col>
            <h1 className="text-center">Admin Support Requests</h1>
          </Col>
        </Row>

        <TicketListView isLoading={isLoading} tickets={tickets} />
      </div>
    );
  }
}

export default AdminSupport;

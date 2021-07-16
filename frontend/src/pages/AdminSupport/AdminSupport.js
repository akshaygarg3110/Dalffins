import React, { Component } from "react";
import "./AdminSupport.scss";
import { Button, Col, Row } from "react-bootstrap";
import { fetchTicketsApi } from "../../utils/Api";
import { Redirect } from "react-router-dom";

class AdminSupport extends Component {
  state = {
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

  render() {
    if (!localStorage.getItem("isAdmin")) {
      return <Redirect to="/admin/login" />;
    }

    const { tickets } = this.state;

    return (
      <div className="admin-support-container container">
        <Row>
          <Col>
            <h1 className="text-center">Admin Support Requests</h1>
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
      </div>
    );
  }
}

export default AdminSupport;

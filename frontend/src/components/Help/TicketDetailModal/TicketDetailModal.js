import React, { useEffect, useRef } from "react";
import "./TicketDetailModal.scss";
import { Button, Form, Modal } from "react-bootstrap";
import { saveTicketApi } from "../../../utils/Api";

const TicketDetailModal = ({ show, ticket, onClose }) => {
  const [showModal, setShowModal] = React.useState(show);
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [currentTicket, setCurrentTicket] = React.useState(ticket);
  const messageRef = useRef(null);

  useEffect(() => {
    setCurrentTicket(ticket);
    if (show !== showModal) {
      setShowModal(show);
    }
    scrollToBottom();
  }, [show, ticket]);

  const scrollToBottom = () => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      if (messageRef) setTimeout(scrollToBottom, 1000);
    }
  };

  const hideModal = () => {
    setDescription("");
    setShowModal(false);
    setLoading(false);
    onClose();
  };

  const handleDescriptionOnChange = (e) => setDescription(e.target.value);

  const hasValidValues = () => {
    if (description.length > 0 && !loading) {
      return true;
    }
    return false;
  };

  const saveData = () => {
    const newTicket = {
      ...currentTicket,
      messages: [
        ...currentTicket.messages,
        { text: description, author: "asd", date: "sdf" },
      ],
    };
    setCurrentTicket(newTicket);
    setTimeout(scrollToBottom, 100);
    setDescription("");
    // const data = {
    //   email: "Jp9573@gmail.com",
    // };
    // saveTicketApi(data)
    //   .then((res) => {
    //     hideModal();
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     setLoading(false);
    //   });
  };

  if (!currentTicket) return <></>;

  return (
    <Modal
      className="ticket-detail-modal"
      show={showModal}
      onHide={hideModal}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {currentTicket.reason}{" "}
          <span className="status">({currentTicket.status})</span>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
          <div className="message-list">
            {currentTicket.messages.map((msg, index) => {
              return (
                <div className="slide" ref={messageRef} key={index}>
                  <div className="title">
                    <div className="author">{msg.author}</div>
                    <div className="date">{msg.date}</div>
                  </div>
                  <div className="message">{msg.text}</div>
                </div>
              );
            })}
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Add new message</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={description}
                onChange={handleDescriptionOnChange}
              />
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={saveData}
          disabled={!hasValidValues()}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TicketDetailModal;

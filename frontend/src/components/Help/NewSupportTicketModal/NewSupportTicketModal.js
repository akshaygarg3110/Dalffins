import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { saveTicketApi } from "../../../utils/Api";

const NewSupportTicketModal = ({ show, onClose }) => {
  const [showModal, setShowModal] = React.useState(show);
  const [reason, setReason] = React.useState("NA");
  const [description, setDescription] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (show !== showModal) {
      setShowModal(show);
    }
  }, [show]);

  const hideModal = () => {
    setReason("NA");
    setDescription("");
    setShowModal(false);
    setLoading(false);
    onClose();
  };
  const handleDescriptionOnChange = (e) => setDescription(e.target.value);
  const handleReasonOnChange = (e) => setReason(e.target.value);
  const hasValidValues = () => {
    if (reason !== "NA" && description.length > 0 && !loading) {
      return true;
    }
    return false;
  };
  const createTicket = () => {
    const data = {
      reason,
      messages: [
        {
          text: description,
          date: new Date(),
          author: "Jp9573@gmail.com",
        },
      ],
      email: "Jp9573@gmail.com",
    };
    saveTicketApi(data)
      .then((res) => {
        hideModal();
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  };

  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Create a new ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Reason</Form.Label>
              <select
                className="custom-select"
                onChange={handleReasonOnChange}
                value={reason}
              >
                <option value="NA">Reason for the support request</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Customer Complaint">Customer Complaint</option>
                <option value="Payment Issue">Payment Issue</option>
              </select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Brief description about the issue</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
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
          onClick={createTicket}
          disabled={!hasValidValues()}
        >
          Create ticket
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewSupportTicketModal;

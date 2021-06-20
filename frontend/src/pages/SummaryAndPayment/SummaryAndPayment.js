import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, FormControl, Button, InputGroup, ListGroup, Col, Row, Form } from "react-bootstrap";

function SummaryAndPayment() {

    const [interac, setInterac] = useState(false);
    const [stringEle, setStrg] = useState("      ");
    const updateUpload = () => {
        setInterac(false);
    }
    const upload = () => {
        window.alert("E-Interac details...");
        setInterac(true);
    }

    return (

        <div>
            <div style={{ marginTop: "5%",marginLeft:"5%", maxHeight: "50%" }}>
                <Row style={{ marginLeft: "auto", width: "90%", marginRight: "5%" }}>
                    <Col xs={6} class="col-md-6 border-right">
                        <img src="images/Chef2.jpg" width="93%" height="72%"/>
                    </Col>
                    <Col xs={6} style={{ paddingLeft: "3%" }}>
                        <Row style={{ marginRight: "20%" }}>
                            <h1>Order Summary</h1>
                        </Row>
                        <Row style={{ marginRight: "20%", marginTop: "2%", maxHeight: "22%", minHHeight:"80%" }}>
                            <div>
                            <ListGroup style={{ overflow: "scroll", maxHeight: "40%", width:"140%"}}>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>
                                    <ListGroup.Item><b>Veg. Loaded Pizza x 3 </b> ... ($4 x 3 = $12)</ListGroup.Item>

                                </ListGroup>
                            </div>
                        </Row>
                        <Row style={{ marginRight: "20%", marginTop:"3%" }}>
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea" placeholder="Add special instructions..." style={{ backgroundColor: "lightgrey", fontStyle: "italic", fontSize: "20px", margin: "auto" }} />
                            </InputGroup>
                        </Row>
                        <Row>
                            <Card body style={{ color:"white",fontFamily:"cursive", fontSize:"130%" ,marginLeft: "19%", marginTop: "3%", backgroundColor: "#3f51b5", color: "white", width: "40%", textAlign: "center" }}><b>Total = 127.56$</b></Card>
                        </Row>
                        <Row style={{ marginRight: "25%", marginTop: "5%" }}>
                            <h1>Payment Option</h1>
                        </Row>
                        <Row>
                            <div>
                            <Form.Check onClick={updateUpload} style={{ marginTop: "2%" }}
                                type="radio"
                                label="Pay by Cash"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                           <Form.Check onClick={upload} style={{ marginTop: "2%" }}
                                type="radio"
                                label="Pay by E-Interac"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            </div>
                        </Row>
                        <Row>
                            <div>
                                {interac ? (
                                    <Form>
                                        <Form.Group>
                                            <Form.File id="exampleFormControlFile1" label="E-Interac receipt" style={{ marginTop: "2%", width: "90%" }} />
                                        </Form.Group>
                                    </Form>
                                ) : 
                                   <div style={{marginBottom:"500%"}}>
                                       {stringEle}
                                       </div>
                                }
                            </div>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="danger" style={{ marginTop: "5%", width: "50%", padding: "5% 5%" }}>Go Back</Button>
                            </Col>
                            <Col>
                                <Button variant="success" style={{ marginTop: "5%", width: "50%", padding: "5% 5%" }}>Pay</Button></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SummaryAndPayment;

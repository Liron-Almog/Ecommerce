import {Button, Col, Container, Form, Row} from "react-bootstrap";
import CustomLabel from "../CustomLabel";

export default function CheckoutPage(){

    return(
        <>
            <Container>
                <Row className={"justify-content-center"} style={{marginTop:"80px"}}>
                    <Col className={"col-4"}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><CustomLabel>Email address</CustomLabel></Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><CustomLabel>First Name</CustomLabel></Form.Label>
                            <Form.Control type="text" placeholder="Enter your first name" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><CustomLabel>Last Name</CustomLabel></Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" required/>
                        </Form.Group>
                    </Form>
                        <Row className={"justify-content-center"}>
                            <Button style={{width:"20%"}} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )

}
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Outlet, useNavigate} from "react-router-dom";
import Logo from "../Logo";
import React from "react";
export default function WelcomePage({name,setName}){


    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        navigate("/home")
    }
    return (
        <>
            <Logo/>
            <img style={{height:"100vh"}} src="moviesBackground.png" className="img-fluid" width="100%" alt="logo" />
            <div style={{position:"absolute" , top:"15%",width:"100%"}}>
                <Container style={{marginTop:"70px"}}>
                    <h2 style={{ fontSize:"260%" ,color: "white", textAlign:"center"}}>
                        Unlimited movies, TV shows, and more</h2>
                    <h3 style={{ fontSize:"170%" ,color: "white", textAlign:"center"}}>Ready to purchase? Enter your name to start.</h3>

                    <Form onSubmit={handleSubmit} className={"mt-5"}>
                        <Row className={"justify-content-center"}>
                            <Col className={"col-5"}>
                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        placeholder="Enter your first name"
                                    />
                                </Form.Group>
                            </Col>
                            <Button className={"col-2"} variant="danger" type="submit">Get Started</Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        </>
    )
}


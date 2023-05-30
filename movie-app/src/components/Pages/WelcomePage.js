import {Button, Col, Container, Image, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Logo from "../Logo";
import React from "react";

/**
 * WelcomePage component shows a welcoming screen when the user
 * opens the website and when he submits a purchase.
 * @returns {JSX.Element}
 * @constructor
 */
export default function WelcomePage(){

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home")
    }

    return (
        <>
            <Logo/>
            <Image style={{height:"100vh"}} src="moviesBackground.png" className="img-fluid" width="100%" alt="logo" />
            <div style={{position:"absolute" , top:"15%",width:"100%"}}>
                <Container style={{marginTop:"70px"}}>

                    <h2 style={{ fontSize:"28px" ,color: "white", textAlign:"center"}}>Unlimited movies, TV shows, and more</h2>
                    <h3 style={{ fontSize:"20px" ,color: "white", textAlign:"center"}}>Ready to purchase? Click the button to start.</h3>

                    <Row className={"justify-content-center m-5"}>
                        <Button className={"col-sm-4"} variant="danger" onClick={handleSubmit}>Get Started</Button>
                    </Row>
                </Container>
            </div>
        </>
    )
}


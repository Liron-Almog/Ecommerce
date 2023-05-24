import {Button, Card, Col, Container, Row, Table} from "react-bootstrap";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function CartPage(){

    const array = [
        {
            adult: false,
            backdrop_path: "/m8JTwHFwX7I7JY5fPe4SjqejWag.jpg",
            genre_ids: [28, 12, 878],
            id: 640146,
            original_language: "en",
            original_title: "Ant-Man and the Wasp: Quantumania",
            overview: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
            popularity: 3353.957,
            poster_path: "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
            release_date: "2023-02-15",
            title: "Ant-Man and the Wasp: Quantumania",
            video: false,
            vote_average: 6.509,
            vote_count: 2821
        },
        {
            adult: false,
            backdrop_path: "/8rpDcsfLJypbO6vREc0547VKqEv.jpg",
            genre_ids: [878, 12, 28],
            id: 76600,
            original_language: "en",
            original_title: "Avatar: The Way of Water",
            overview: "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
            popularity: 1729.089,
            poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            release_date: "2022-12-14",
            title: "Avatar: The Way of Water",
            video: false,
            vote_average: 7.701,
            vote_count: 8115
        },
        {
            adult: false,
            backdrop_path: "/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
            genre_ids: [53, 28, 80],
            id: 1102776,
            original_language: "fr",
            original_title: "AKA",
            overview: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
            popularity: 1262.933,
            poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
            release_date: "2023-04-28",
            title: "AKA",
            video: false,
            vote_average: 7.026,
            vote_count: 313
        },
        {
            adult: false,
            backdrop_path: "/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
            genre_ids: [53, 28, 80],
            id: 1102776,
            original_language: "fr",
            original_title: "AKA",
            overview: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
            popularity: 1262.933,
            poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
            release_date: "2023-04-28",
            title: "AKA",
            video: false,
            vote_average: 7.026,
            vote_count: 313
        },
        {
            adult: false,
            backdrop_path: "/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
            genre_ids: [53, 28, 80],
            id: 1102776,
            original_language: "fr",
            original_title: "AKA",
            overview: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
            popularity: 1262.933,
            poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
            release_date: "2023-04-28",
            title: "AKA",
            video: false,
            vote_average: 7.026,
            vote_count: 313
        },
        {adult: false,
            backdrop_path: "/zh614Bixv2ePaHK8gzcUpUmcvYv.jpg",
            genre_ids: [53, 28, 80],
            id: 1102776,
            original_language: "fr",
            original_title: "AKA",
            overview: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
            popularity: 1262.933,
            poster_path: "/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
            release_date: "2023-04-28",
            title: "AKA",
            video: false,
            vote_average: 7.026,
            vote_count: 313
        }]
    document.body.style.backgroundColor = "black"
    const navigate = useNavigate()
    const PHOTO_URL = "https://www.themoviedb.org/t/p/w440_and_h660_face"
            return(
        <>
            <Container className={"mt-5"}>
                <Row>
                    <Col className={"col-8"}>
                        <Row>
                            {array !== undefined && array.map(item => {
                                return (
                                    <Col className={"col-3 d-flex mb-2"}>
                                        <Card style={{ background: "black", border: "1px solid gray"}}>
                                            <Card.Img variant="top" src={PHOTO_URL + item.poster_path} alt="Image description" />
                                            <Card.Body>
                                                <Card.Title style={{ color: "whitesmoke", fontSize: "15px" }}>{item.title}</Card.Title>
                                                <Card.Text style={{ color: "whitesmoke", fontSize: "12px" }}>{item.release_date}</Card.Text>
                                            </Card.Body>
                                            <Button variant="danger" onClick={(event) => {
                                                // Handle click event
                                            }}>Price 3.99$ <div/>Remove </Button>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col style={{color:"white"}} className={"col-4"}>
                        <Row className={"justify-content-center"} style={{marginTop:"20%"}}>
                            <Col  className={"col-8 "}>
                                <h1 style={{textAlign:"center", marginBottom:"22px"}}>Cart Totals</h1>
                            <Table >
                                <tbody style={{color:"white"}}>
                                    <tr style={{fontWeight:"10px"}}>
                                        <td>Total</td>
                                        <td >399$</td>
                                    </tr>
                                    <tr>
                                        <td>Tax</td>
                                        <td>Free</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold"}}>Total</td>
                                        <td style={{fontSize:"20px",fontWeight:"bold"}} className={"text-danger"} >399$</td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Button style={{fontWeight:"bold"}} onClick={() => navigate("/checkout")} className={"col-12"} variant={"warning"}>PROCEED TO CHECKOUT</Button>
                            </Col>
                        </Row>
                        <Row className={"justify-content-center"} style={{marginTop:"55px"}}>
                            <Col className={"col-12" }>
                                <Button style={{fontWeight:"bold"}} variant={"success"}>Delete All The Items</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );

}
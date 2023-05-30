import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

/**
 * The component creates the cards that show the movie and movie details.
 * @param itemsData
 * @param handleClick
 * @param buttonText
 * @param colorButton
 * @returns {JSX.Element}
 * @constructor
 */
export default function ItemList({ itemsData, handleClick ,buttonText,colorButton}) {

    return (
        <Row className={"justify-content-center"}>
            {itemsData !== "" && itemsData.map(item => (
                <Col key={item.id} className={"col-2 mb-4 d-flex"} style={{width:"170px"}}>
                    <Card style={{ background: "black", border: "1px solid gray" }}>
                        <Card.Img variant="top" src={item.posterPath} alt="Image description" />
                        <Card.Body>
                            <Card.Title style={{color:"whitesmoke"}} className="card-title">{item.title}</Card.Title>
                            <Card.Text style={{color:"whitesmoke"}} className="card-date">{item.releaseDate}</Card.Text>
                        </Card.Body>
                        <Button id={item.id} variant={colorButton} onClick={(event) => handleClick(event)}>{buttonText} <br />Remove</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

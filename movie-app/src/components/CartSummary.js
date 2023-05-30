import {Button, Col, Row} from "react-bootstrap";
import React from "react";
import TableCartSummary from "./TableCartSummary";

/**
 * The function manages the cart summery and presents the total price.
 * @param price
 * @param navigate
 * @returns {JSX.Element}
 * @constructor
 */
export default function CartSummary({price,navigate}){

    return (
        <>
            <Row className={"justify-content-center"} style={{marginTop:"5px"}}>
                <Col className={"col-8"}>
                    <h1 className={"cart-total-h1"}>Cart Totals</h1>
                    <TableCartSummary price={price}/>
                    <Button style={{fontWeight:"bold"}} onClick={() => navigate("/checkout")}
                            className={"col-12"} variant={"warning"}>PROCEED TO CHECKOUT</Button>
                </Col>
            </Row>
        </>


    )

}
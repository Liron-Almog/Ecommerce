import {Alert, Col, Row} from "react-bootstrap";
import React from "react";

/**
 * To present a consistent error in the program
 * @param isError
 * @returns {JSX.Element}
 * @constructor
 */
export default function Error({isError}){
    const FETCH_ERROR_MSG = 'Something went wrong ...';

    return (
        isError &&
        <Row className={"justify-content-center"}>
            <Col className={"col-5"}>
                <Alert key={"variant"} variant={"danger"}>
                    {FETCH_ERROR_MSG}
                </Alert>
            </Col>
        </Row>
    )
}

import { Col, Form, Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import CustomLabel from "./CustomLabel";
export default function FilterBar({filterQuery,setFilterQuery}){

    const [rangeValue, setRangeValue] = useState(undefined);
    const [statusRange, setStatusRange] = useState(true);
    const [includeVideo, setIncludeVideo] = useState(false);
    const [adults, setAdults] = useState(false);
    const [primaryReleaseYear, setPrimaryReleaseYear] = useState(false);


    return(
        <>
            <Row className={"mt-3"}>
                <Col className={"col-5"}>
                    <Form>
                        <Form.Check
                            onChange={() => {
                                setAdults(!adults)
                                setFilterQuery({...filterQuery,'include_adult':!adults})
                            }}
                            type="switch"
                            id="custom-switch"
                            label= {<CustomLabel>Adults</CustomLabel>}
                        />
                    </Form>
                </Col>
            </Row>

            <Row className={"mt-3"}>
                <Col className={"col-12"}>
                    <Form >
                        <Form.Check
                            onChange={() => {
                                setIncludeVideo(!includeVideo)
                                setFilterQuery({...filterQuery,'include_video':!includeVideo})
                            }
                        }
                            type="switch"
                            id="custom-switch"
                            label= {<CustomLabel>Include Video</CustomLabel>}
                        />
                    </Form>
                </Col>
            </Row>

            <Row className={"mt-3"}>
                <Col className={"col-12"}>
                    <Form.Select aria-label="Default select example"
                    onChange={(event) =>{setFilterQuery({...filterQuery,sort_by:event.target.value})}}>

                        <option value="">Sort by</option>
                        <option value="popularity.asc">Popularity</option>
                        <option value="revenue.asc">Revenue</option>
                        <option value="vote_count.asc">Vote Count</option>
                        <option value="vote_average.asc">Vote Average</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className={"mt-3"}>
                <Col className={"col-12"}>
                    <Form.Label> {<CustomLabel>Primary release year</CustomLabel>} </Form.Label>
                    <Form.Control
                        type="number"
                        value={primaryReleaseYear}
                        onChange={(event)=>{
                            if(/^\d+$/.test(event.target.value)){
                                setPrimaryReleaseYear(event.target.value)
                                setFilterQuery({...filterQuery,primary_release_year:event.target.value})
                            }
                            else {setPrimaryReleaseYear(" ")
                                delete filterQuery.primary_release_year
                            }
                        }}
                    />
                </Col>
            </Row>
            <Row className={"mt-3"}>
                <Col className={"col-12"}>
                    <Form.Label> {<CustomLabel>Genre</CustomLabel>} </Form.Label>
                    <Form.Select onChange={(event) =>{setFilterQuery({...filterQuery,with_genres:event.target.value})}}>
                        <option value="">Genre</option>
                        <option value="16">Animation</option>
                        <option value="35">Comedy</option>
                        <option value="80">Crime</option>
                        <option value="99">Documentary</option>
                        <option value="12">Adventure</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className={"justify-content-end mt-3"}>
                <Col className={"col-4"}>
                    <Form.Check
                        type="switch"
                        onChange={() => {
                            setRangeValue("")
                            delete filterQuery.year
                            setStatusRange(!statusRange)}
                        }
                    />
                </Col>
            </Row>
            <Row style={{position:"relative",bottom:"11px"}}>
                <Col className={"col-10"}>
                    <Form.Label>{<CustomLabel>Year</CustomLabel>}</Form.Label>
                    <Form.Range
                        min="1600"
                        max="2023"
                        disabled={statusRange}
                        onChange={(event) => {
                            setRangeValue(event.target.value)
                            setFilterQuery({...filterQuery,year:event.target.value})}}
                    />
                    <CustomLabel>{rangeValue}</CustomLabel>
                </Col>
            </Row>
        </>

    );
}
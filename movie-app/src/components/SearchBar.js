import {Button, Col, Form, Image, Row} from "react-bootstrap";
import ModalHistory from "./ModalHistory";
import React from "react";

/**
 * The SearchBar contains a search bar and a submit button that
 * sends an api request in order to get the desired results.
 * it also shows the ModalHistory.s
 * @param query
 * @param setQuery
 * @param handleClickSearch
 * @param searchHistory
 * @param setSearchHistory
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchBar({query,setQuery,handleClickSearch,searchHistory,setSearchHistory}){

    const URL_FOR_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';

    return (
        <Form className={"mb-3"}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            value={query}
                            onChange={event => {setQuery(event.target.value)}}
                            placeholder="Search for movies..."
                        />
                    </Form.Group>
                </Col>
                <Button className={"col-1"} style={{width:"40px",marginRight:"2px"}} onClick={event => {
                    handleClickSearch(URL_FOR_SEARCH + query);}}>

                    <Image style={{position:"relative",bottom:"2px"}} width={"15px"} src={"search.png"}/></Button>
                <ModalHistory  className={"col-1"} searchHistory={searchHistory} setSearchHistory={setSearchHistory} doFetch={handleClickSearch}  />
            </Row>
        </Form>
    )
}
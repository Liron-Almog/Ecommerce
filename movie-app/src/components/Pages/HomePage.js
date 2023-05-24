import React, {useEffect, useState} from 'react';
import axios from 'axios';
import HelloUser from "../HelloUser";
import '../../myCss.css'
import {Container, Row, Col, Form, Button, Image, Card, ProgressBar, Spinner, Navbar} from "react-bootstrap";
import FilterBar from "../FilterBar";
import MyNavBar from "../MyNavBar";
import ModalHistory from "../ModalHistory";


const API_KEY = '&api_key=d7419a73cefb6e53466365292f67b968'
const URL_FOR_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
const URL_FOR_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?';
const DEFAULT_SEARCH = URL_FOR_SEARCH + 'a'
const FETCH_ERROR_MSG = 'Something went wrong ...';
const PHOTO_URL = "https://www.themoviedb.org/t/p/w440_and_h660_face"

export default function HomePage({name}){

    document.body.style.backgroundColor = "black"

    const useDataApi = (initialUrl, initialData) => {

        const [data, setData] = useState(initialData); // data to be fetched
        const [url, setUrl] = useState(initialUrl); // any change on this state variable will trigger a fetch
        const [isLoading, setIsLoading] = useState(false); // is it fetching?
        const [isError, setIsError] = useState(false); // is there an error?

        // we are using useEffect to fetch data from the API
        // when the url state changes
        useEffect(() => {
            // this code returns a promise, but an effect can only return void or a cleanup function.
            // so we need to wrap the promise in a function that returns void
            const fetchData = async () => {

                setIsError(false); // reset error state
                setIsLoading(true); // set loading state to true to show loading indicator for example
                try {
                    const result = await axios(url + API_KEY); // not that you can pass full object to axios including method, url, data
                    setData(result.data); // set data state
                    setSearchHistory(new Set([...searchHistory, url]))
                } catch (error) {
                    setIsError(true); // an error occurred, set error state to true
                } finally {
                    setIsLoading(false); // set loading state to false to hide loading indicator
                }
            };

            fetchData(); // execute the function above

        }, [url]); // trigger the effect when url changes

        return [{ data, isLoading, isError }, setUrl]; // return the data and the URL setter function
    };

    const [filterQuery, setFilterQuery] = useState({});
    const [query, setQuery] = useState(''); // query string to be searched is a state
    const [{ data, isLoading, isError }, doFetch] = useDataApi(DEFAULT_SEARCH, {});
    const [searchHistory, setSearchHistory] = useState(new Set());
    const [i,setI] =useState(0)

    console.log(data.results)
    return(
        <>
            {name && <HelloUser name={name}/> }
            <Container style={{marginTop:"3%"}}>
                <Row>
                    <Col className={"col-2"}>
                        <Row>
                            <Button onClick={()=>{
                                let tempQuery = ""
                                for (const property in filterQuery)
                                    tempQuery += `&${property}=${filterQuery[property]}`
                                doFetch(URL_FOR_DISCOVER + tempQuery)

                            }} variant="danger" type="submit">Search By Filter</Button>
                        </Row>
                        <FilterBar filterQuery={filterQuery} setFilterQuery={setFilterQuery}/>
                    </Col>
                    <Col className={"col-10"}>
                        <Form className={"mb-3"}>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            value={query}
                                            onChange={event => {setQuery(event.target.value)
                                                                                doFetch(URL_FOR_SEARCH + event.target.value)}}
                                            placeholder="Search for movies..."
                                        />
                                    </Form.Group>
                                </Col>
                                <ModalHistory  className={"col-1"} doFetch={doFetch} searchHistory={searchHistory} setSearchHistory={setSearchHistory}/>
                            </Row>

                        </Form>
                        {isError && <div className="alert alert-danger"> {FETCH_ERROR_MSG} </div>}
                        {isLoading ? (<Row className={"justify-content-center mt-4"}><Spinner animation="border" variant="danger" /></Row>):
                            (
                                <Row className={"justify-content-center"}>
                                { data.results !== undefined && data.results.map((item) =>
                                    <Col className={"col-2 mb-4 d-flex"} style={{width:"170px"}}>
                                        <Card style={{ background:"black",border:"1px solid gray"}} >
                                            <Card.Img variant="top" src={PHOTO_URL + item.poster_path} alt="Image description" />
                                            <Card.Body>
                                                <Card.Title style={{color:"whitesmoke" ,fontSize:"15px"}}>{item.title}</Card.Title>
                                                <Card.Text style={{color:"whitesmoke" ,fontSize:"12px"}}>{item.release_date}</Card.Text>
                                            </Card.Body>
                                            <Button variant="warning" onClick={(event) =>{
                                                setI(i +1)
                                            }}>Add cart 3.99$</Button>
                                        </Card>
                                    </Col>
                            )}</Row>
                            )
                        }
                    </Col>
                </Row>
                <div className={"sticky-bottom mb-3"} style={{color:"whitesmoke",fontSize:"20px"}}>Items: <span className={"bg-warning"} style={{color:"black",background:"yellow", borderRadius:"4px", padding:"1px 3px 1px 3px"}}>{` ${i}`}</span></div>
            </Container>
        </>
    );
}
import React, {useEffect, useState} from 'react';
import '../../NoFoundPage.css'
import {Container, Row, Col, Form, Button, Card, Spinner} from "react-bootstrap";
import FilterBar from "../FilterBar";
import {useMyDataApi} from "../../utilityFunction/api";
import Error from "../Error";
import SearchBar from "../SearchBar";

const API_KEY = '&api_key=d7419a73cefb6e53466365292f67b968'
const PHOTO_URL = "https://www.themoviedb.org/t/p/w440_and_h660_face"
const URL_FOR_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';

/**
 * The homepage lets a user search for movies to purchase and add them to his shopping cart.
 * The user can use the filters from the filter bar in order to get the best result.
 * When a movie has been searched, an API request is beeing send in order to get the list of
 * relevant movies to present to the user.
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage(){

    document.body.style.backgroundColor = "black"

    const [filterQuery, setFilterQuery] = useState({});
    const [searchHistory, setSearchHistory] = useState(new Set());
    const [data, isLoading, isError, fetchDataGet] = useMyDataApi('get');
    const [dataAddItem, isLoadingAddItem, isErrorAddItem, fetchData] = useMyDataApi('post');
    const [numberOfItems,setNumberOfItems] = useState(0)
    const [query, setQuery] = useState(''); // query string to be searched is a state

    useEffect(()=>{fetchData('/add-item')},[])
    useEffect(()=>{dataAddItem.text !== "" && setNumberOfItems(dataAddItem.text)},[dataAddItem])
    useEffect(()=>{handleClickSearch(URL_FOR_SEARCH + 'a')},[])
    const handleAddItem =  (item) =>{
        let params = {id:item.id, posterPath:PHOTO_URL + item.poster_path, title:item.title, releaseDate:item.release_date}
        fetchData("/add-item",params)
    }
    const handleClickSearch = (url)=>{
        setSearchHistory(new Set([...searchHistory, url]))
        fetchDataGet(url + API_KEY)
    }

    return(
        <>
            <Container style={{marginTop:"3%"}}>
                <Error isError={isErrorAddItem || isError}/>
                <Row>
                    <Col className={"col-sm-2 col-12"}>
                        <FilterBar filterQuery={filterQuery} setFilterQuery={setFilterQuery} handleClickSearch={handleClickSearch}/>
                    </Col>
                    <Col className={"col-9"}>
                        <SearchBar query={query} handleClickSearch={handleClickSearch} searchHistory={searchHistory}
                                   setQuery={setQuery} setSearchHistory={setSearchHistory}/>
                        {isLoading ? (<Row className={"justify-content-center mt-4"}><Spinner animation="border" variant="danger" /></Row>):
                            (
                                <Row className={"justify-content-center"}>
                                { data.results !== undefined &&
                                    data.results.map((item) =>
                                    <Col key={item.id} className={"col-2 mb-4 d-flex"} style={{width:"170px"}}>
                                        <Card style={{ background:"black",border:"1px solid gray"}} >
                                            <Card.Img variant="top" src={PHOTO_URL + item.poster_path} alt="Image description" />
                                            <Card.Body>
                                                <Card.Title style={{color:"whitesmoke" ,fontSize:"15px"}}>{item.title}</Card.Title>
                                                <Card.Text style={{color:"whitesmoke" ,fontSize:"12px"}}>{item.release_date}</Card.Text>
                                            </Card.Body>
                                            <Button variant="warning" onClick={async ()=>{
                                                await handleAddItem(item)}}>Add cart 3.99$</Button>
                                        </Card>
                                    </Col>
                            )}
                                </Row>
                            )
                        }
                    </Col>
                </Row>
                <div className={"sticky-bottom mb-3"} style={{color:"whitesmoke",fontSize:"20px",backgroundColor:"black"}}>
                    Items: <span className={"bg-warning"} style={{color:"black",background:"yellow", borderRadius:"4px", padding:"1px 3px 1px 3px"}}>{numberOfItems}</span>
                    {isLoadingAddItem && <Spinner  className={"sticky-bottom"} animation="border" variant="danger" />}
                </div>
            </Container>
        </>
    );
}
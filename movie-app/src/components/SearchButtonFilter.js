import {Button, Row} from "react-bootstrap";
import React from "react";

/**
 * SearchButtonFilter component is in charge of the button that
 * searches by filter and creating the api query.
 * @param handleClickSearch
 * @param filterQuery
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchButtonFilter({handleClickSearch,filterQuery}){

    const API_KEY = '&api_key=d7419a73cefb6e53466365292f67b968'
    const URL_FOR_DISCOVER = 'https://api.themoviedb.org/3/discover/movie?';

    return(
        <Row>
            <Button onClick={()=>{
                let tempQuery = ""
                for (const property in filterQuery)
                    tempQuery += `&${property}=${filterQuery[property]}`
                handleClickSearch(URL_FOR_DISCOVER + API_KEY +tempQuery)
            }} variant="danger" type="submit">Search By Filter</Button>
        </Row>
    )
}
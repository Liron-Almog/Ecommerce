import {Alert, Button, Col, Container, Row, Spinner} from "react-bootstrap";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useMyDataApi} from "../../utilityFunction/api";
import Error from "../Error";
import CartSummary from "../CartSummary";
import '../../CartPage.css'
import ItemList from "../ItemList";
import PageTitle from "../PageTitle";

/**
 * CartPage component manages the users cart.
 * It presents the movies the user choose and also
 * gives an option to delete items from the cart.
 * @returns {JSX.Element}
 * @constructor
 */
export default function CartPage(){

    document.body.style.backgroundColor = "black"
    const navigate = useNavigate()
    const [itemsData, isLoadingItems, isErrorItems, getItems] = useMyDataApi('get');
    const [price, isLoadingPrice, isErrorPrice, getPrice] = useMyDataApi('get');
    const [dataDeleteItem, isLoadingDelete, isError, deleteItem] = useMyDataApi('delete');

    /**
     * executes the API request to set the price and items
     */
    useEffect(()=>{{
        getPrice('/get-price');
        getItems('/get-items');
    }},[])

    /**
     * deletes chosen items from the cart and updates the cart and price
     * @param event
     * @returns {Promise<void>}
     */
    const handleRemoveItem = async (event) =>{
        await deleteItem(`/delete-item/id/${event.target.id}`);
        await getPrice('/get-price');
        await getItems('/get-items');
    }

    /**
     * deletes all items from the cart and updates the cart and price
     * @returns {Promise<void>}
     */
    const handleDeleteAllItems = async ()=>{

        await deleteItem(`/delete-all-items`);
        await getItems('/get-items');
        await getPrice('/get-price');
    }

    return(
        <>
            <PageTitle title={"Cart"}/>
            <Container className={"mt-5"}>
                <Error isError={isError || isErrorPrice || isErrorItems}/>
                <Row>
                    <Col className={"col-12"} sm={8}>
                        {price === 0 && <Alert key={"variant"} variant={"danger"}>The cart is empty. Go shop for products</Alert>}
                        <ItemList handleClick={handleRemoveItem} itemsData={itemsData} buttonText={"Price 3.99$"} colorButton={"danger"}/>
                    </Col>
                    <Col className={"col-12"} sm={4}>
                        <CartSummary price={price} navigate={navigate}/>
                        <Row className={"justify-content-center"} style={{marginTop:"25px"}}>
                            <Col className={"col-5" }>
                                <Button style={{fontWeight:"bold"}} onClick={handleDeleteAllItems} variant={"success"}>Delete All The Items</Button>
                                {(isLoadingDelete || isLoadingPrice || isLoadingItems)&&
                                    <Spinner style={{marginLeft:"45px"}} className={"mt-3"} animation="border" variant="danger" />}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
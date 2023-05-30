import {Button, Col, Container, Form, Row, Spinner} from "react-bootstrap";
import CustomLabel from "../CustomLabel";
import React, {useEffect, useState} from "react";
import {useMyDataApi} from "../../utilityFunction/api";
import {useNavigate} from "react-router-dom";
import Error from "../Error";
import PageTitle from "../PageTitle";
import MyModel from "../MyModel";

/**
 * CheckoutPage gets inputs from user in order to submit a purchase.
 * The component includes input validation.
 * When the checkout is submitted, a message is presented on the screen
 * and then there is a redirect to the welcome page.
 * @returns {JSX.Element}
 * @constructor
 */
export default function CheckoutPage(){

    document.body.style.backgroundColor = "black"

    const SUCCESSED_PURCHASE = "The purchase was made successfully"
    const navigate = useNavigate()
    const [lastName, setLastName] = useState("")
    const [firstName,setFirstName]= useState("")
    const [email,setEmail]= useState("")
    const [itemsData, isLoadingItems, isErrorItems, getItems] = useMyDataApi('get');
    const [purchaseData, isLoadingPurchase, isErrorPurchase, doPurchase] = useMyDataApi('post');
    const [price,setPrice] = useState(0)

    /**
     * API request
     */
    useEffect(()=>{getItems("/number-of-items")},[]);

    /**
     * If there are no items in the cart, redirect to homepage
     */
    useEffect(()=>{
        setPrice(parseFloat(3.99*itemsData).toFixed(2))
        if(itemsData === 0)
            navigate('/home')
    },[itemsData])
    const handleSubmit = async (event) =>{
        event.preventDefault()
       await getItems("/number-of-items")
       await doPurchase('/purchase',({firstName:firstName,lastName:lastName,email:email,payment:price}))
    }
    const handleCloseModal = ()=> {
        doPurchase('/destroy-session')
        navigate('/')
    }

    return(
        <>
            <Container style={{ marginTop:"45px"}}>
                <PageTitle title={"Checkout"}/>
                <Error isError={isErrorPurchase}/>
                {!isLoadingPurchase ?
                <Row className={"justify-content-center mt-2"} >
                    <Col className={"col-12 col-md-6"}>
                    <Form onSubmit={(event)=>handleSubmit(event)}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label><CustomLabel>Email address</CustomLabel></Form.Label>
                            <Form.Control type="email"
                                          placeholder="Enter email"
                                          value={email}
                                          required
                                          name="email"
                                          onChange={(event) => setEmail(event.target.value)}
                                          />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><CustomLabel>First Name</CustomLabel></Form.Label>

                            <Form.Control value={firstName}
                                          name="firstName"
                                            type="text"
                                          required
                                          onChange={(event) => setFirstName(event.target.value)}
                                          placeholder="Enter your first name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label><CustomLabel>Last Name</CustomLabel></Form.Label>
                            <Form.Control
                                        value={lastName}
                                        name="lastName"
                                        type="text"
                                        required
                                        placeholder="Enter your last name"
                                        onChange={(event) => setLastName(event.target.value)}
                                        />
                        </Form.Group>

                        <p style={{textAlign:"center",fontWeight:"bold",fontSize:"20px"}}><CustomLabel>Total price: {price}</CustomLabel></p>

                        {!(isLoadingItems  && !isErrorItems) && <Row className={"justify-content-center"}>
                            <Button className={"col-4"} variant="danger" type="submit">
                                Submit
                            </Button>
                        </Row>}
                    </Form>
                    </Col>
                    {purchaseData && <MyModel title={SUCCESSED_PURCHASE} handleCloseModal={handleCloseModal}/>}
                </Row> : (<Row className={"justify-content-center"}><Spinner animation="border" variant="danger" /></Row>)}


            </Container>

        </>
    )
}
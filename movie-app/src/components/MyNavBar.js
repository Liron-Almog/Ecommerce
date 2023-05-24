import {Container, Nav, Navbar} from "react-bootstrap";

import * as events from "events";
import {Outlet, useNavigate} from "react-router-dom";

export default function MyNavBar(){

    const navigate = useNavigate()
    const handleClick = (event,path) => {
        event.preventDefault();
        navigate(`${path}`)
    }
    return (
        <>

            <Navbar style={{height:"55px" ,marginTop:"8px" }} >
                <Container >
                    <h1 className={"text-warning " }>Letflix</h1>
                        <Nav className="me-auto " style={{marginLeft:"20px"}}>
                            <Nav.Link  onClick={(event) =>handleClick(event,"/home")} className={"text-warning"}>Home</Nav.Link>
                            <Nav.Link onClick={(event) =>handleClick(event,"/cart")} className={"text-warning"}>Cart </Nav.Link>
                            <Nav.Link onClick={(event) =>handleClick(event,"/checkout")} className={"text-warning"}>Checkout </Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}
import {Button, Image, Modal} from "react-bootstrap";
import React, {useState} from "react";

/**
 * The component handles the search history and contains
 * buttons that allows the user to search or delete the url.
 * @param searchHistory
 * @param setSearchHistory
 * @param doFetch
 * @returns {JSX.Element}
 * @constructor
 */
export default function ModalHistory({searchHistory,setSearchHistory,doFetch}){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={handleShow} variant="warning" style={{width:"40px"}}>
                <Image style={{position:"relative",bottom:"2px"}} width={"40px"} fluid={true} src={"history.png"}/>
            </Button>

            <Modal  show={show} onHide={handleClose}>
                <Modal.Title className={"bg-dark pt-2"} style={{color:"whitesmoke",textAlign:"center"}} >Search History</Modal.Title>

                <Modal.Body className={"bg-dark"}>
                    {Array.from(searchHistory).map((element) => {
                        return <div key={element}>

                            <div className={"border-bottom mb-1"}/>
                            <div style={{color:"whitesmoke", overflow: "auto"}}>{element}</div>

                            <Button id={element} onClick={(event) => doFetch(event.target.id)}>Search Again</Button>
                            <Button id={element} variant="danger" className={"m-2"} onClick={(event) => {
                                let shallowCopy = new Set([...searchHistory]);
                                shallowCopy.delete(event.target.id)
                                setSearchHistory(shallowCopy)
                                }}>
                                    Delete</Button>
                        </div>
                    })}

                </Modal.Body>
                <Modal.Footer className={"bg-dark"}>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() =>{ handleClose()
                                                     setSearchHistory(new Set())}}>Delete History
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );


}
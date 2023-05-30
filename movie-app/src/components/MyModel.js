import {Button, Modal} from "react-bootstrap";
import React from "react";

/**
 * The component creates a model and gets a title that will
 * be presented in the model and gets a function that will execute
 * when the user clicks on cancel btn.
 * @param title
 * @param handleCloseModal
 * @returns {JSX.Element}
 * @constructor
 */
export default function MyModel({title,handleCloseModal}){

   return(
       <Modal size="sm" show={true}>
           <Modal.Header className={"bg-dark text-warning "}>
               <Modal.Title style={{textAlign:"center"}} id="example-modal-sizes-title-sm">
                   {title}
               </Modal.Title>
               <Button variant={"danger"} onClick={handleCloseModal}>Close</Button>
           </Modal.Header>
       </Modal>
   )

}
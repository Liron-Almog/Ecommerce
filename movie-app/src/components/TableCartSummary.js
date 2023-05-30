import {Table} from "react-bootstrap";
import React from "react";

/**
 * TableCartSummary component shows the table with all the
 * items the total price of the purchase.
 * @param price
 * @returns {JSX.Element}
 * @constructor
 */
export default function TableCartSummary({price}){

    return(
        <Table >
            <tbody style={{color:"white"}}>
            <tr style={{fontWeight:"10px"}}>
                <td>Total</td>
                <td >{parseFloat(price).toFixed(2)}</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>Free</td>
            </tr>
            <tr>
                <td>Items</td>
                <td>{parseInt(price / 3.99)}</td>
            </tr>
            <tr>
                <td style={{fontWeight:"bold"}}>Total</td>
                <td style={{fontSize:"20px",fontWeight:"bold"}} className={"text-danger"} >{parseFloat(price).toFixed(2)}</td>
            </tr>
            </tbody>
        </Table>
    )
}
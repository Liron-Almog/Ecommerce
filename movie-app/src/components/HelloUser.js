import React from "react";

export default function HelloUser({name}){

    return(
        <h5  className={"text-warning"} style={{
            fontSize:"14px",
            position:"absolute",
            top: "75px",
            left: "60px",}}>
            {`Welcome ${name}`}</h5>
    )
}
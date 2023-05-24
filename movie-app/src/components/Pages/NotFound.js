import {useNavigate} from "react-router-dom";
import {Button, Col, Container, Form, Image, Row} from "react-bootstrap";
import Logo from "../Logo";
import {useEffect, useState} from "react";

export default function NotFound(){

    const navigate = useNavigate();
    const [time,setTime] = useState(10);

    useEffect(() =>{

        const intervalId = setInterval(()=> {

            setTime(prevTime => {
                const newTime = prevTime - 1;
                if (newTime <= 0)
                    navigate('/');

                return newTime;
            })
            }
        ,1000)

        return () => {
            clearInterval(intervalId);
        };
    },[])

    return(
        <>
        <Logo/>
        <div style={{background:"black", height:"100vh"}}>.
            <h1 style={{textAlign: "center",
                        fontSize:"242%",
                        color:"whitesmoke",
                        marginTop: "5%"}}>The page was not found :(</h1>
            <Container>
                <Row className={"justify-content-center"}>
                    <Image src="panda.png" className={"col-12"} fluid={true} style={{width:"27%"}} alt={"panda"}></Image>
                </Row>
                <Row className={"justify-content-center"}>
                    <Button onClick={() => navigate('/')} style={{marginTop:"8px",fontSize:"18px"}} className={"col-3"}>Press here to entry page</Button>
                </Row>
                <p style={{textAlign:"center",
                            marginTop:"8px",
                            color:"whitesmoke"
                            }}>{`You will return to entry page more ${time} seconds`}</p>
        </Container>

        </div>
        </>);
}


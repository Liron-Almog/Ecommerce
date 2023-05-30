import {useNavigate} from "react-router-dom";
import {Button, Container, Image, Row} from "react-bootstrap";
import Logo from "../Logo";
import {useEffect, useState} from "react";
import '../../NoFoundPage.css';

/**
 * NotFound component deals with error of page
 * not found when the url is invalid.
 * @returns {JSX.Element}
 * @constructor
 */
export default function NotFound(){

    const navigate = useNavigate();
    const [time,setTime] = useState(10);
    document.body.style.backgroundColor = "black"

    useEffect(() =>{
        const intervalId = setInterval(()=> {
            setTime(prevTime => {
                const newTime = prevTime - 1;
                if (newTime <= 0)
                    navigate('/');

                return newTime;
            })}
        ,1000)

        return () => {
            clearInterval(intervalId);
        };
    },[])

    return(
        <>
            <Logo/>
            <Container style={{marginTop:"110px"}}>
                <h1 className={"not-found-text"}>The page was not found :(</h1>
                <Row className={"justify-content-center"}>
                    <Image src="panda.png" fluid={true} style={{width:"27%"}} alt={"panda"}></Image>
                </Row>
                <Row className={"justify-content-center"}>
                    <Button className={"col-md-4 col-10"} onClick={() => navigate('/')} style={{marginTop:"8px",fontSize:"18px"}}>Press here to entry page</Button>
                </Row>
                <p className={"return-text"}>{`You will return to entry page in ${time} seconds`}</p>
            </Container>
        </>);
}


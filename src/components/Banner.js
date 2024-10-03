import { useState, useEffect } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerimage from "../assets/img/header-img.png";

export const Banner = () =>{
    const [LoopNum,setLoopNum]=useState(0);
    const [isDeleting, setIsDeletting] = useState(false);
    const toRotate = ["A","B","C"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() => {
        let thicker = setInterval(() => {
            thick();
        },delta)

        return () => { clearInterval(thicker)};
    },[text])

    const thick = () => {
        let i = LoopNum % toRotate.length;
        let fulltext = toRotate[i];
        let updatedText = isDeleting ? fulltext.substring(0, text.length -1) : fulltext.substring(0,text.length+ 1)

        setText(updatedText);
        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText == fulltext){
            setIsDeletting(true);
            setDelta(period);
        }else if(isDeleting && updatedText ==="") {
            setIsDeletting(false);
            setDelta(500);
            setLoopNum(LoopNum+1)
        }
    }

    return(
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my portfolio</span>
                    <h1>{'Hi I am xxxxx '}<span className="wrap">{text}</span></h1>
                    <p>gggggggggggggggggggg</p>
                    <button onClick={() => console.log('clicked')}>CV<ArrowRightCircle size={24}></ArrowRightCircle></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerimage} alt="Header Img" />
                </Col>
            </Row>
        </Container>
    </section>

    );
}
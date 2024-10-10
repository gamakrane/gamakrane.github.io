import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import jauge_80 from "../assets/img/jauge_80.png";
import jauge_90 from "../assets/img/jauge_90.png";
// import jauge_25 from "../assets/img/jauge_25.png";
import jauge_50 from "../assets/img/jauge_50.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <p>Proficient in engineering principles, software development, and project management. Skilled in planning, coordinating,
                                and executing IT projects, with a focus on innovative solutions and teamwork.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={jauge_80} alt='80% proficiency in HTML/CSS' />
                                    <h5>HTML/CSS</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_90} alt='90% proficiency in SQL/MySQL' />
                                    <h5>SQL/MySQL</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_90} alt='90% proficiency in Python' />
                                    <h5>Python</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_50} alt='50% proficiency in C/C++' />
                                    <h5>C/C++</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_50} alt='50% proficiency in JAVA' />
                                    <h5>JAVA</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_80} alt='80% proficiency in JavaScript' />
                                    <h5>JavaScript</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_80} alt='80% proficiency in R' />
                                    <h5>R</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_80} alt='80% proficiency in Node.js' />
                                    <h5>Node.js</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

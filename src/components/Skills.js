import { Col, Container ,Row} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import jauge_80 from "../assets/img/jauge_80.png";
import jauge_90 from "../assets/img/jauge_90.png";
import jauge_25 from "../assets/img/jauge_25.png";
import jauge_50 from "../assets/img/jauge_50.png";




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
                            <p>hhhhhhhhhhhhhhh</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={jauge_80} alt='Image'/>
                                    <h5>Web dev1</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_90} alt='Image'/>
                                    <h5>Web dev2</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_25} alt='Image'/>
                                    <h5>Web dev3</h5>
                                </div>

                                <div className='item'>
                                    <img src={jauge_50} alt='Image'/>
                                    <h5>Web dev4</h5>
                                </div>

                                <div className='item'>
                                    <img src='' alt='Image'/>
                                    <h5>Web dev5</h5>
                                </div>

                                <div className='item'>
                                    <img src='' alt='Image'/>
                                    <h5>Web dev6</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    )

}
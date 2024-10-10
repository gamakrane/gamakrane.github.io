import { Col, Container, Row } from 'react-bootstrap';
import SkillCard from './SkillCard'; // Assurez-vous que le chemin du fichier est correct

export const Skills = () => {
    const skills = [
        { name: 'HTML'},
        { name: 'CSS'},
        { name: 'SQL'},
        { name: 'Python'},
        { name: 'C/C++'},
        { name: 'Java'},
        { name: 'JavaScript'},
        { name: 'R'},
        { name: 'Pandas'},
        { name: 'Matplotlib'},
        { name: 'Seaborn'},
        { name: 'React'},
        { name: 'TensorFlow'},
        { name: 'Git'},
        { name: 'Power Bi'},
        { name: 'Node.js'}
 
    ];

    return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <Row>
                                {skills.map((skill, index) => (
                                    <Col key={index} md={2} className="mb-2">
                                        <SkillCard skill={skill} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

//import { isVisible } from "@testing-library/user-event/dist/utils";
import { Container, Row, Col } from 'react-bootstrap';
// import 'animate.css';
import { ProjectCard } from './ProjectCard';
import project1 from '../assets/img/Project1.jpg';
import project2 from '../assets/img/Project2.jpg';
import project3 from '../assets/img/Project3.jpg';
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
    const projects = [
        {
            title: 'Food Recognition System',
            description:
                'The Food Recognition System is a machine learning project aimed at identifying and classifying various food items from images , enabling automated feeding for individuals with limited mobility..',
            imgUrl: project1,
            technologies: ['ML', 'Python'],
        },

        {
            title: 'Development of a Vehicle Fleet Management Tool',
            description:
                'The Vehicle Fleet Management Tool is a system designed to optimize fleet operations by providing real-time tracking, maintenance scheduling, fuel monitoring, and driver performance analysis.',
            imgUrl: project2,
            technologies: ['Django', 'Python'],
        },

        {
            title: 'Data analysis - Global IQ by country',
            description:
                'Étude statistique et visualisation des variations du QI moyen par pays',
            imgUrl: project3,
            technologies: [
                'Python',
                'Kaggle',
                'Matplotlib',
                'Pandas',
                'Seaborn',
                'GeoPandas',
                'Jupyter',
            ],
        },
    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        Throughout my academic journey, I’ve
                                        worked on various engineering and IT
                                        projects, applying my skills in software
                                        development,data analysis, and project
                                        management. These experiences have
                                        allowed me to design, implement, and
                                        optimize innovative solutions while
                                        collaborating with cross-functional
                                        teams
                                    </p>

                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            );
                                        })}
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="Background design with colorful shapes"
            />
        </section>
    );
};

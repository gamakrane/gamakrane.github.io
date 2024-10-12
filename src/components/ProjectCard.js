import { Col } from 'react-bootstrap';

export const ProjectCard = ({
    title,
    description,
    imgUrl,
    technologies = [],
}) => {
    return (
        <Col size={12} sm={6} md={6}>
            <div className="proj-imgbx">
                <img
                    src={imgUrl}
                    alt={title}
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {technologies && technologies.length > 0 && (
                        <div className="proj-tech">
                            <div className="technologies-bx">
                                {technologies.map((tech, index) => (
                                    <div className="technologie" key={index}>
                                        <p>{tech}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Col>
    );
};

import { Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";
import Logo from '../assets/img/Logo.png';
import nav_icon1 from '../assets/img/nav-icon1.svg';
import nav_icon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled ] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={Logo} alt='Logo' style={{ width: '40px', height: 'auto' }}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link> 
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
            <Nav.Link href="#education"className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('education')}>Education</Nav.Link> 
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://linkedin.com/in/ghada-amakrane"><img src={nav_icon1} alt="linkedin"/></a>
                <a href="https://gamakrane.github.io/"><img src={nav_icon3} alt="github"/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

};
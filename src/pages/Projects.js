import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #071330;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  
    width: 600px;
`;

const Title = styled.h1`
    color: white;
    justify-content: center;
`;

const Subtitle = styled(Link)`
    color: #7BC2BC;
    cursor: pointer;
    text-decoration: none;
    font-size: x-large;
    &:hover {
      color: black;
      text-decoration: none;
    }
`;

const Description = styled.h4`
    color: black;
 
`;

const ProjectContainer = styled.div`
    border: 5px solid #7BC2BC;
    background-color: white;
    padding: 10px;
    width: 700px;
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
    height: 30px;
    width: 30px;
`;

const my = styled.img`
    height: 30px;
    width: 20px;
`;

const Projects = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <div>
                        <Title>
                            Projects
                        </Title>
                        <ProjectContainer>
                            <Subtitle to="https://github.com/joelHarawa/flygenie_flight_management_system">'FlyGenie' - flight management system</Subtitle>
                            <Description>React web application made to help users purchase flights and edit flights. Login functionality for both staff members and users. Made using HTML, Javascript, CSS, and MySQL. For CS-UY 3083 Databases.</Description>
                            <ImageContainer>
                                <Image src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"/>
                                <Image src="https://cdn.worldvectorlogo.com/logos/html-1.svg"/>
                                <Image src="https://cdn.worldvectorlogo.com/logos/css-3.svg"/>
                                <Image src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"/>
                            </ImageContainer>
                        </ProjectContainer>
                        <ProjectContainer>
                            <Subtitle to="https://github.com/joelHarawa/Piper_Music_App">'Piper' - android music application</Subtitle>
                            <Description>Music application that reads internal storage for music files and displays music with gradient according to prominent colors in album artwork. Made using Java, kotlin, and xml.</Description>
                            <ImageContainer>
                                <Image src="https://cdn.worldvectorlogo.com/logos/java.svg"/>
                                <Image src="https://cdn.worldvectorlogo.com/logos/android-logomark.svg"/>
                            </ImageContainer>
                        </ProjectContainer>
                        <ProjectContainer>
                            <Subtitle to="https://github.com/joelHarawa/simcache">'Simcache.py' - processor and cache simulator</Subtitle>
                            <Description>Program made to simulate L1 and L2 cache as well as processor designed for CS-UY 2214 Computer Architecture and Organization. Made using Python.</Description>
                            <ImageContainer>
                                <Image src="https://cdn.worldvectorlogo.com/logos/python-5.svg"/>
                            </ImageContainer>
                        </ProjectContainer>
                        <ProjectContainer>
                            <Subtitle to="https://github.com/joelHarawa/DnD">'D&D' - role playing game</Subtitle>
                            <Description>Dungeons-and-Dragons-like game designed for CS-UY 2124 Object Oriented Programming. Takes file input and simulates role playing game outputting game results. Made using C++.</Description>
                            <Image src="https://cdn.worldvectorlogo.com/logos/c.svg"/>
                        </ProjectContainer>
                    </div>
                </Wrapper>
            </Container>
        </div>
    );
}
export default Projects;
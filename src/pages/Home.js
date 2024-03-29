import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";



const Container = styled.div`
    width: 100%;
    height: 92vh;
    background-color: #071330;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
`;

const InfoContainer = styled.div`
    margin-top: 5vh;
    width: 40%;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
`;

const ProjectContainer = styled.div`
    width: 40%;
    margin-top: 5vh;
    margin-left: 5vw;
    display: flex;
    flex-direction: column;
    height: 50%;
    justify-content: space-between;
`;

const Info = styled.h2`
    color: white;
    margin-top: 3vh;
`;

const Content = styled.p`
    color: white;
    padding: 1vw;
`;

const Project = styled.button`
    margin-top: 3vh;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: white;
    background-color: #16697A;
    font-size: 3vh;
    height: 7vh;
    width: 100%;
    border: none;
    text-align: left;
  border-bottom-left-radius: ${({ isCollapsed }) => (isCollapsed ? '0' : '5px')};
  border-bottom-right-radius: ${({ isCollapsed }) => (isCollapsed ? '0' : '5px')};
    &:hover{
      background-color: #7BC2BC;
      cursor: pointer;
    }
`;

const ProjectContent = styled.div`
    background-color: #7BC2BC;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    
`;

const Home = () => {
    const [collapsedProjects, setCollapsedProjects] = useState({});

    const projects = [
        {name: 'CULTR Magazine', content: 'CULTR Magazine, tailored for a dynamic club at Michigan State' +
                ' University, is made up of a ReactJS front-end crafted with a blend of JavaScript, HTML, and CSS. ' +
                'The back-end server, powering the platform, is hosted on an AWS EC2 instance and built using NodeJS.'},
        {name: 'Moosic', content: 'MOOSIC, is a ReactJS-based Spotify playlist generator creating playlists based on a user\'s mood. The front-end, developed with a mix of' +
                ' JavaScript, HTML, and CSS. Leveraging Spotify\'s API for seamless integration, MOOSIC generates playlists' +
                ' tailored to individual preferences, promising a unique and enjoyable musical journey.'},
        {name:'27 - Puzzle', content: 'In my Intro to Artificial Intelligence class, I tackled the challenge of a 3-dimensional n-puzzle using C++. ' +
                'Employing the A-star search algorithm and leveraging the Manhattan distance heuristic, the solution' +
                ' finds the most optimal path from initial state to goal state.'},
        {name: 'E20 Processor', content: 'I implemented an \'E20\' processor with cache using Python, a project' +
                ' assigned by my Computer Architecture professor. This processor written in python' +
                '  Python, mirrors the architecture envisioned. The inclusion of a cache system further enhances' +
                ' its efficiency.'},
        {name: 'FlyGenie', content: 'FlyGenie is a flight booking website crafted as part of my' +
                ' Databases class project. Leveraging a simple tech stack, FlyGenie integrates ReactJS for a dynamic' +
                ' front-end, NodeJS to power the back-end, and MySQL to manage the database.'},
    ];

    const toggleProject = (clickedProject) => {
        setCollapsedProjects((prev) => {
            const updatedState = {};
            // Collapse all projects except the clicked one
            projects.forEach((project) => {
                updatedState[project.name] = project.name === clickedProject ? !prev[clickedProject] : false;
            });
            return updatedState;
        });
    };

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <InfoContainer>
                        <Info><span style={{color: '#7BC2BC'}}>About Me</span></Info>
                        <Info>Hello, I'm <span style={{color: '#7BC2BC'}}> Joel Harawa</span>, a senior at New York
                            University, passionately immersed in the world of Computer Science I'm an aspiring Software
                            engineer, with interests in both front-end and back-end engineering.</Info>
                    </InfoContainer>
                    <ProjectContainer>
                        <Info><span style={{color: '#7BC2BC'}}>Projects</span></Info>
                        {projects.map((project) => (
                            <div key={project.name}>
                                <Project onClick={() => toggleProject(project.name)}
                                         isCollapsed={collapsedProjects[project.name]}>
                                    {project.name}
                                </Project>
                                {collapsedProjects[project.name] && (
                                    <ProjectContent>
                                        <Content>{project.content}</Content>
                                    </ProjectContent>
                                    )}
                            </div>
                        ))}
                    </ProjectContainer>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Home;
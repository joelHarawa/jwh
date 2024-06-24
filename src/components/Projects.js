import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Container = styled.div`
    margin-top: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 75%;
    height: 70vh;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

const Project = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #7BC2BC;
    border-radius: 25px;
    padding: 10px;
    width: 80%;
    color: white;
`;

const Header = styled.div`
    display: flex;
    width: 100%
    align-items: center;
    justify-content: space-between;
`;

const ProjectTitle = styled.p`
    padding-left: 5px;
    font-size: 20px;
    font-weight: 600;
    color: #7BC2BC;
`;

const ProjectText = styled.p`
    padding-left: 5px;
    font-size: 18px;
`;

const ProjectLinks = styled.div`
    display flex;
    align-items: center;
`;

const ProjectLink = styled.a`
    padding: 5px;
    color: #7BC2BC;
    font-size: 20px;
    &:hover {
        color: white;
        cursor: pointer;
    }
`;

const Projects = () => {
    return (
        <Container>
            <Left>
                <Project>
                    <Header>
                        <ProjectTitle>JobTracker</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://github.com/joelHarawa/jobTracker" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>
                    JobTracker is a React Native application designed to help 
                    users track their job applications efficiently. Developed
                     with a blend of TypeScript, HTML, and CSS, JobTracker
                      leverages a Node.js backend and a MongoDB database for
                       robust data management. 
                    </ProjectText>
               </Project>
               <Project>
                    <Header>
                        <ProjectTitle>Moosic</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://app.moosic.xyz" target="_blank" rel="noopener noreferrer">
                                <FaGlobe/>
                            </ProjectLink>
                            <ProjectLink href="https://github.com/joelHarawa/Moosic" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>MOOSIC, is a ReactJS Spotify playlist 
                    generator creating playlists based on a user's mood.
                    The front-end, developed with a mix of
                    JavaScript, HTML, and CSS. Using Spotify's API for
                     seamless integration, MOOSIC generates playlists
                    tailored to individual preferences.</ProjectText>
                </Project>
                <Project>
                    <Header>
                        <ProjectTitle>27 - Puzzle A* Search</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://github.com/joelHarawa/27-Puzzle-A-Search" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>In my Intro to Artificial Intelligence class,
                    I tackled the challenge of a 3-dimensional n-puzzle using
                    C++. Employing the A-star search algorithm and leveraging
                    the Manhattan distance heuristic, the solution
                    finds the most optimal path from initial state to goal
                     state.</ProjectText>
                </Project>
            </Left>
            <Right>
                <Project>
                    <Header>
                        <ProjectTitle>CULTR Magazine</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://app.cultrmagazine.com" target="_blank" rel="noopener noreferrer">
                                <FaGlobe/>
                            </ProjectLink>
                            <ProjectLink href="https://github.com/joelHarawa/cultrmsu" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>
                    CULTR Magazine, tailored for a dynamic club at Michigan State
                    University, is made up of a ReactJS front-end crafted with a blend of JavaScript, HTML, and CSS.
                    The back-end server, powering the platform, is hosted on an AWS EC2 instance and built using NodeJS.
                    </ProjectText>
                </Project>
                <Project>
                    <Header>
                        <ProjectTitle>FlyGenie</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://github.com/joelHarawa/flygenie_flight_management_system" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>FlyGenie is a flight booking website crafted as part of my
                Databases class project. Leveraging a simple tech stack, FlyGenie integrates ReactJS for a dynamic
                front-end, NodeJS to power the back-end, and MySQL to manage the database.</ProjectText>
                </Project>
                <Project>
                    <Header>
                        <ProjectTitle>Piper Music App</ProjectTitle>
                        <ProjectLinks>
                            <ProjectLink href="https://github.com/joelHarawa/Piper_Music_App" target="_blank" rel="noopener noreferrer">
                                <FaGithub/>
                            </ProjectLink>
                        </ProjectLinks>
                    </Header>
                    <ProjectText>Piper is a Java Android music player application crafted for a sleek user experience.
                         Piper offers seamless music playback and stunning visuals based of album artwork.
                        A simple application that provides an enjoyable and immersive listening journey on your Android device.
                    </ProjectText>
                </Project>
            </Right>
        </Container>
    )
}

export default Projects;
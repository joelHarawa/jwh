import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Contacts from "../components/Contacts";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #071330;
    display: flex;
    align-items: center;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const InfoContainer = styled.div`
    margin-top: 5vh;
    width: 40%;
    display: flex;
    flex-direction: column;
`;

const Info = styled.h2`
    color: white;
    margin-top: 3vh;
`;

const Home = () => {

    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <InfoContainer>
                        <Info><span style={{color: '#7BC2BC'}}>About Me</span></Info>
                        <Info>Hello, I'm <span style={{color: '#7BC2BC'}}> Joel Harawa</span>, and I've recently graduated from New York
                            University with a Bachelor of Science in Computer Science. I'm an aspiring Software
                            engineer, with interests in both front-end and back-end engineering.
                            <br/>
                            <br/>
                            These are the technologies I work with:
                            <br/>
                        </Info>
                    </InfoContainer>
                    <Technologies/>
                    <InfoContainer id="projects">
                        <Info><span style={{color: '#7BC2BC'}}>Projects</span></Info>
                    </InfoContainer>
                    <Projects/>
                    <InfoContainer id="contacts">
                        <Info><span style={{color: '#7BC2BC'}}>Contact</span></Info>
                    </InfoContainer>
                    <Contacts/>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Home;
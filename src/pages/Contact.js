import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #071330;
    align-items: center;
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
    text-decoration: none;
    font-size: x-large;
`;

const Description = styled.h4`
    color: black;
 
`;

const ProjectContainer = styled.div`
    border: 5px solid #7BC2BC;
    background-color: white;
    width: 400px;
    padding: 10px;
`;

const Image = styled.img`
    width: 30px;
    height: 30px;
`;

const ImageContainer = styled.div`
    padding: 10px;
`;


const Contact = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <div>
                    <Title>
                        Contacts
                    </Title>

                    <ProjectContainer>
                        <Subtitle>Email</Subtitle>
                        <Description>Primary Email: joel.harawa@gmail.com</Description>
                        <Description>School Email: jwh8918@nyu.edu</Description>
                        <ImageContainer>
                            <Image src="https://img.uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/envelope-icon.svg"/>
                        </ImageContainer>
                    </ProjectContainer>
                    <ProjectContainer>
                        <Subtitle>Phone</Subtitle>
                        <Description>Mobile: +1-(347)-720-0541</Description>
                        <ImageContainer>
                            <Image src="https://img.uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-call-icon.svg"/>
                        </ImageContainer>
                    </ProjectContainer>
                </div>
            </Container>
        </div>
    )
}

export default Contact;
import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 92vh;
    display: flex;
    background-color: #071330;
    align-items: center;
    justify-content: center;
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
                    </ProjectContainer>
                    <ProjectContainer>
                        <Subtitle>Phone</Subtitle>
                        <Description>Mobile: +1-(347)-720-0541</Description>
                    </ProjectContainer>
                </div>
            </Container>
        </div>
    )
}

export default Contact;
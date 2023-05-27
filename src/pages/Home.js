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

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Image = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    
`;

const ImageContainer = styled.div`
    padding-bottom: 5vh;
  
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 60%;
`;

const Info = styled.h2`
    color: white;
`;

const Button = styled(Link)`
    border: none;
    background-color: white;
    padding: 10px;
    margin-left: 20px;
    text-decoration: none;
    color: black;
    border: 5px solid #7BC2BC;
    &:hover{
      cursor: pointer;
      background-color: #7BC2BC;
      color: white;
      text-decoration: none;
    }
`;

const Map = styled.div`
  justify-content: left;
`;

const LanguageContainer = styled.div`
    padding-top: 5vh;
    padding-bottom: 5vh;
`;
const LanguageBox = styled.div`
    background-color: white;
    padding: 10px;
    border: 5px solid #7BC2BC;
`;
const Language = styled.img`
    height: 40px;
    width: 40px;
`;

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://media.licdn.com/dms/image/C4E03AQFPW0qoFs4b2w/profile-displayphoto-shrink_800_800/0/1656688303878?e=2147483647&v=beta&t=H45CAwzZSS0YfsaVUmjlaARgJlqey8P0O3tnjvziyig"/>
                    </ImageContainer>
                    <Info>Hi, I'm Joel Harawa, a rising senior at New York University studying Computer Science.</Info>
                    <Info>My main interests are web development and mobile app development.</Info>
                    <Info>Here are my Programming Languages (from strongest to weakest).</Info>
                    <LanguageContainer>
                        <LanguageBox>
                            <Language src="https://cdn.worldvectorlogo.com/logos/c.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/python-5.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/html-1.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/css-3.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"/>
                            <Language src="https://cdn.worldvectorlogo.com/logos/java.svg"/>
                        </LanguageBox>
                    </LanguageContainer>
                    <Map>
                        <Button to="/projects">My projects</Button>
                        <Button to="/contact">Contact me</Button>
                    </Map>
                </Wrapper>
            </Container>
        </div>
    );
}

export default Home;
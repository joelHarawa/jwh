import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; 

const Container = styled.div`
    height:8vh;
    background-color: #071330;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled(Link)`
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
    color: #7BC2BC;
    text-decoration: none;
    &:hover {
      color: white;
    }
`;

const MenuItem = styled(ScrollLink)`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    text-decoration: none;
    color: #7BC2BC;
    &:hover {
      color: white;
    }
  
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                </Left>
                <Center>
                    <Logo to={"/"}>Joel Harawa</Logo>
                </Center>
                <Right>
                    <MenuItem to="projects" smooth={true} duration={500}>Projects</MenuItem>
                    <MenuItem to="contacts" smooth={true} duration={500}>Contact</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
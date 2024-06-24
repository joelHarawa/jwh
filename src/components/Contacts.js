import styled from "styled-components";
import {FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom"; 

const Container = styled.div`
    margin-top: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 30vh;
    flex-direction: column;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    border: 1px solid #7BC2BC;
    border-radius: 25px;
    padding: 10px;
    width: 80%;
    color: white;
    &:hover {
        background-color: white;
        color: black;
    }
`;

const ContactLink = styled(Link)`
    text-decoration: none;
    padding-left: 5px;
    color: inherit;
`;

const ContactText = styled.p`
    padding-left: 5px;
`;

const Contacts = () => {
    return (
        <Container>
            <Contact>
                <FaEnvelope/>
                <ContactLink to={"mailto:joel.harawa@gmail.com"}>Primary Email: joel.harawa@gmail.com</ContactLink>
            </Contact>
            <Contact>
                <FaEnvelope/>
                <ContactLink to={"mailto:jwh8918@nyu.edu"}>Secondary Email: jwh8918@nyu.edu</ContactLink>
            </Contact>
            <Contact>
                <FaPhone/>
                <ContactText>Mobile: 347-720-0541</ContactText>
            </Contact>
        </Container>
    )
}

export default Contacts;
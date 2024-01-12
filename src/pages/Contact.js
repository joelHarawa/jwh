import React, {useState} from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 92vh;
    display: flex;
    background-color: #071330;
    justify-content: center;
`;

const ContactContainer = styled.div`
    width: 60%;
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

const ContactButton = styled.button`
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

const ContactContent = styled.div`
    background-color: #7BC2BC;
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Contact = () => {
    const [collapsedContacts, setCollapsedContacts] = useState({});

    const contacts = [
        {name: "Primary E-Mail", content: "jwh8918@nyu.edu"},
        {name: "Secondary E-mail", content: "joel.harawa@gmail.com"},
        {name: "Phone", content: "347-720-0541"},
        {name: "Linkedin", content: "https://www.linkedin.com/in/joelwharawa/"}

    ]
    const toggleContact = (clickedContact) => {
        setCollapsedContacts((prev) => {
            const updatedState = {};
            // Collapse all contacts except the clicked one
            contacts.forEach((contact) => {
                updatedState[contact.name] = contact.name === clickedContact ? !prev[clickedContact] : false;
            });
            return updatedState;
        });
    };
    return (
        <div>
            <Navbar/>
            <Container>
                    <ContactContainer>
                        <Info><span style={{color: '#7BC2BC'}}>Contacts</span></Info>
                        {contacts.map((contact) => (
                            <div key={contact.name}>
                                <ContactButton onClick={() => toggleContact(contact.name)}
                                         isCollapsed={collapsedContacts[contact.name]}>
                                    {contact.name}
                                </ContactButton>
                                {collapsedContacts[contact.name] && (
                                    <ContactContent>
                                        <Content>{contact.content}</Content>
                                    </ContactContent>
                                )}
                            </div>
                        ))}
                    </ContactContainer>
            </Container>
        </div>
    )
}

export default Contact;
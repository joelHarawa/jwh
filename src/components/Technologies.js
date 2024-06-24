import styled from "styled-components";
import { FaAws, FaCode, FaCss3Alt, FaDatabase, FaNodeJs, FaPython, FaReact, FaJs } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Container = styled.div`
    margin-top: 3vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 40vh;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    around;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
`;

const Technology = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    border: 1px solid #7BC2BC;
    border-radius: 25px;
    padding: 10px;
    width: 80%;
    color: white;
`;

const TechnologyText = styled.p`
    padding-left: 5px;
`;

const Technologies = () => {
    return (
        <Container>
            <Left>
                <Technology>
                    <FaPython/>
                    <TechnologyText>Python</TechnologyText>
               </Technology>
               <Technology>
                    <FaJs/>
                    <TechnologyText>JavaScript</TechnologyText>
                </Technology>
                <Technology>
                    <FaCss3Alt/>
                    <TechnologyText>CSS</TechnologyText>
                </Technology>
                <Technology>
                    <FaReact/>
                    <TechnologyText>React Native</TechnologyText>
                </Technology>
                <Technology>
                    <FaDatabase/>
                    <TechnologyText>MySQL</TechnologyText>
                </Technology>
            </Left>
            <Right>
                <Technology>
                    <SiCplusplus/>
                    <TechnologyText>C++</TechnologyText>
                </Technology>
                <Technology>
                    <FaReact/>
                    <TechnologyText>ReactJS</TechnologyText>
                </Technology>
                <Technology>
                    <FaNodeJs/>
                    <TechnologyText>NodeJS</TechnologyText>
                </Technology>
                <Technology>
                    <FaAws/>
                    <TechnologyText>AWS</TechnologyText>
                </Technology>
                <Technology>
                <FaDatabase/>
                <TechnologyText>MongoDB</TechnologyText>
                </Technology>
            </Right>
        </Container>
    )
}

export default Technologies;
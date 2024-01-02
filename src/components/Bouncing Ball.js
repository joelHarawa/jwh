import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30vh);
  }
`;

const BouncingBall = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #FF5733; /* You can change the color */
  border-radius: 50%;
  animation: ${bounceAnimation} 2s linear infinite;
`;

const BouncingBallContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const BouncingBallAnimation = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = () => {
            setPosition((prevPosition) => ({
                x: prevPosition.x + 5, // Adjust the speed as needed
                y: (prevPosition.y + 5) % (window.innerHeight - 30), // Adjust the height - ball size
            }));
        };

        const animationInterval = setInterval(() => {
            updatePosition();
        }, 50); // Adjust the interval as needed

        return () => clearInterval(animationInterval);
    }, []);

    return (
        <BouncingBallContainer>
            <BouncingBall style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
        </BouncingBallContainer>
    );
};

export default BouncingBallAnimation;
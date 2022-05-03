import styled, { keyframes } from 'styled-components';

export const Body = styled.div`
  background: #FFF3E0;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;


const breatheAnimationBig = keyframes`
 0% {  height: 100%; width: 38vw;}
 100% { height: 105%; width: 40vw;}
`

const breatheAnimationMedium = keyframes`
 0% {  height: 70%; width: 25vw;}
 100% { height: 75%; width: 27vw;}
`


export const LandingBigContainer = styled.div`
  background: linear-gradient(to right,  rgba(255, 255, 255, 0.95) 30%, rgba(200, 200, 200, 0.75) 100%);  
  height: 100%;
  width: 38vw;
  border-radius: 30px;
  box-shadow: 10px 10px 20px black;
  &:hover {
    height: 105%; width: 40vw;
    transform: translateY(-5px);
    animation-name: ${breatheAnimationBig};
    animation-duration: 500ms;
  } 
`;

export const LandingMediumContainer = styled.div`
  background: linear-gradient(to right,  rgba(255, 255, 255, 0.85) 30%, rgba(200, 200, 200, 0.75) 100%);  
  height: 70%;
  width: 25vw;
  border-radius: 30px;
  box-shadow: 10px 10px 20px black;
  &:hover {
    height: 75%; width: 27vw;
    transform: translateY(-5px);
    animation-name: ${breatheAnimationMedium};
    animation-duration: 500ms;
  } 
`;

/** HEADER *//** HEADER */
/** HEADER *//** HEADER */
/** HEADER *//** HEADER */

export const DecorationHeader = styled.div`
  background-image: linear-gradient(to left, #434343 0%, black 100%);
  min-height: 5vh;
  width: 100%;
`;

export const ContainerHeader = styled.div`
  background-image: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  min-height: 14vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const ContainerWrapper = styled.div`
  height: 5vh;
  width: 100%;
  padding-left:20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.text`
  font-size: 40px;
  color: white;
  font-family: "Optima";
  font-weight: 600;
  margin-bottom: 10px;
`;



import styled from 'styled-components';

export const GoToMintingButtonStyle = styled.button`
    border-radius: 15px;
    background-image: linear-gradient( 111.2deg,  rgba(232,5,5,1) 1.7%, rgba(245,49,191,1) 98.7% );    
    width: 14vw;
    height: 6vh;
    border: none;
    &:active {
        box-shadow: 0 3px gray;
        transform: translateY(1px);
    };
    &:hover {
        background-image: linear-gradient( 111.2deg,  rgba(202,0,0,1) 1.7%, rgba(215,19,161,1) 98.7% );    
        box-shadow: 0 3px linear-gradient( 109.2deg,  rgba(107,52,255,1) 16.5%, rgba(51,159,247,1) 81% );
        transform: translateY(-3px);
    }
`;
//background-image: linear-gradient( 111.2deg,  rgba(232,5,5,1) 1.7%, rgba(245,49,191,1) 98.7% );
//background-image: linear-gradient( 109.2deg,  rgba(107,52,255,1) 16.5%, rgba(51,159,247,1) 81% );
//background-image: radial-gradient( circle 621px at 10% 20%,  rgba(150,1,235,1) 13.4%, rgba(251,180,74,1) 90% );
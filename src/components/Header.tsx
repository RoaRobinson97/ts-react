import React, {FC, useState} from "react";
import { ContainerHeader, ContainerWrapper, DecorationHeader, Title  } from "../styles/global.css";
import { ConnectWalletButton, GoToMintingButton } from './Buttons'
import logo from '../assets/images/POLY186-logo-light.png';
import Navbar from './NavBar'

export const PublicHeader: FC = () => {

    const [isWalletConnected, setIsWalletConnected] = useState<boolean>(false);

    return(
        <>
            <ContainerHeader>
            <ContainerWrapper style={{alignItems:'start',height: '12vh'}}>
                    <div style={{ height:'100%',display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <img src={logo} alt="Logo" style={{width:'100px'}}/>
                        <Title>
                            Intellectual Property Register System
                        </Title>
                    </div>
                </ContainerWrapper>
                <ContainerWrapper style={{justifyContent:'flex-end'}}>
                    { (isWalletConnected === true) 
                        ? <GoToMintingButton/>
                        : <ConnectWalletButton/>
                    } 
                </ContainerWrapper>
            </ContainerHeader>
            <DecorationHeader/>
        </>
    )
}

export const PrivateHeader: FC = () => {

    return(
        <>
            <ContainerHeader>
                <ContainerWrapper style={{alignItems:'start',height: '12vh'}}>
                    <div style={{ height:'100%',display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                        <img src={logo} alt="Logo" style={{width:'100px'}}/>
                        <Title>
                            Intellectual Property Register System
                        </Title>
                    </div>
                </ContainerWrapper>
                <ContainerWrapper>
                    <Navbar/>
                </ContainerWrapper>
            </ContainerHeader>
            <DecorationHeader/>

        </>
    )
}




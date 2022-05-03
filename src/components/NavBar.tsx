import React, {FC} from "react";
import { Ul, Nav, Li, A } from "../styles/navbar.css";
import { useLocation } from 'react-router-dom'

const Navbar: FC = () => {  
  
  const location = useLocation();

  return(
        <>
        <Nav>
            <Ul className="list">
            <Li isActive={location.pathname === "/"} ><A href="/">Landing</A></Li>
            <Li isActive={location.pathname === "/minting"}><A href="/#/minting">Minting</A></Li>
            <Li isActive={location.pathname === "/about"}><A href="/#/about">About</A></Li>
            <Li isActive={location.pathname === "/how-it-works"}><A href="/#/how-it-works">How it works</A></Li>
            <Li isActive={location.pathname === "/community"}><A href="/#/community">Community</A></Li>
            </Ul>
          </Nav>
        </>
    )
}

export default Navbar

import React, {FC, useCallback, useEffect, useMemo, useState} from "react";
import { Body, LandingBigContainer, LandingMediumContainer  } from "../styles/global.css";
import { Link } from "react-router-dom";
import { PublicHeader, PrivateHeader }  from "../components/Header"

import myImage from "../assets/images/city.jpeg";
import collage from "../assets/images/collage.jpg";
import divBac from "../assets/images/nasa.jpg";
import { FaLock, FaRocket, FaSmileBeam } from 'react-icons/fa';

const Landing: FC = () => {

  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${myImage})`, 
    backgroundPosition: 'bottom', 
    backgroundSize: '200%', 
    backgroundRepeat: 'no-repeat'
  }

  const collageStyle: React.CSSProperties = {
    backgroundImage: `url(${collage})`, 
    backgroundPosition: '30% 30%', 
    backgroundSize: '130%', 
    backgroundRepeat: 'no-repeat'
  }


  const divBackStyle: React.CSSProperties = {
    backgroundImage: `url(${divBac})`, 
    backgroundPosition: 'center', 
    backgroundSize: '100%', 
    backgroundRepeat: 'no-repeat',
    display:'flex',
  }

  return (
    <>
    <PublicHeader></PublicHeader>
    <Body >
      <div style={{display:'flex'}}>
        <div style={{ paddingTop:'40px', paddingBottom:'40px',minHeight:'80vh', flexGrow:1, justifyContent:'center', alignItems:'center', flexDirection:'column', display:'flex'}}>
        <label style={{
            fontFamily:'Optima',
            fontWeight:'600',
            fontSize:'36px',
            color:'#424242',
            width:'70%',
          marginBottom:'20px'
          }}
          >
          Start your collection
          </label>
          <LandingBigContainer style={{...collageStyle,...{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}}>
          <div style={{borderRadius:'30px', background:'linear-gradient(to right,  rgba(255, 255, 255, 0.10) 60%, rgba(200, 200, 200, 0.10) 100%)', width:'100%', height:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
          </div>
          </LandingBigContainer>
        </div>
        <div style={{padding:'40px',minHeight:'70vh', flexGrow:1, justifyContent:'center', alignItems:'center', flexDirection:'row', display:'flex'}}>
          <LandingBigContainer style={{...imageStyle,...{display:'flex', flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}}>
            <div style={{
              background:'linear-gradient(to right,  rgba(255, 255, 255, 0.85) 30%, rgba(200, 200, 200, 0.65) 100%)', 
              width:'100%', 
              height:'30%',
              borderBottomLeftRadius:'30px',
              borderBottomRightRadius:'30px',
              display:'flex',
              flexDirection:'column',
              justifyContent:'start',
              paddingTop:'20px',
              paddingLeft:'20px',
              alignItems:'start',
              }}>
              <label style={{
                fontFamily:'Optima',
                fontWeight:'600',
                fontSize:'40px',
                color:'#424242'
              }}
              >
              Become a creator today
              </label>
              <label style={{
                fontSize:'20px',
                fontFamily:'Optima',
                color:'#424242',
                fontWeight:'400',
              }}
              >
              Start registering your intellectual property today with Poly186
              </label>
            </div>
          </LandingBigContainer>  
        </div>
        </div>

      <div style={{ display:'flex', flexDirection:'row', justifyContent:'start',marginLeft:'40px', marginTop:'80px',marginBottom:'40px'}}>
        <label style={{
          fontSize:'60px',
          fontFamily:'Arial',
          color:'#424242',
          fontWeight:'600',
        }}
        >
        Enjoy us   
        </label>
        <label style={{
          fontSize:'60px',
          fontFamily:'Arial',
          color:'#FF6D00',
          fontWeight:'600',
          marginLeft:'15px'
        }}
        >
         and get rewarded
        </label>
      </div>
      <div style={{...divBackStyle,...{ display:'flex', borderRadius:'30px', marginBottom:'40px', marginLeft:'20px', marginTop:'20px', marginRight:'20px'}}}>
        <div style={{minHeight:'70vh', flexGrow:1, justifyContent:'center', alignItems:'center', flexDirection:'row', display:'flex'}}>
          <LandingMediumContainer style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <FaLock style={{ color: '#424242', width: '150px', height: '150px'}} />
            <label style={{
                margin:'20px',
                textAlign:'center',
                fontSize:'30px',
                fontFamily:'Optima',
                color:'#424242',
                fontWeight:'600',
              }}
              >
              Secure
              </label>
          </LandingMediumContainer>
        </div>
        <div style={{minHeight:'70vh', flexGrow:1, justifyContent:'center', alignItems:'center', flexDirection:'row', display:'flex'}}>
          <LandingMediumContainer style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <FaRocket style={{ color: '#424242', width: '150px', height: '150px',}} />
            <label style={{
                margin:'20px',
                textAlign:'center',
                fontSize:'30px',
                fontFamily:'Optima',
                color:'#424242',
                fontWeight:'600',
              }}
              >
              Quick
              </label>
          </LandingMediumContainer>        
        </div>
        <div style={{minHeight:'70vh', flexGrow:1, justifyContent:'center', alignItems:'center', flexDirection:'row', display:'flex'}}>
          <LandingMediumContainer style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <FaSmileBeam style={{ color: '#424242', width: '150px', height: '150px',}} />
            <label style={{
                margin:'20px',
                textAlign:'center',
                fontSize:'30px',
                fontFamily:'Optima',
                color:'#424242',
                fontWeight:'600',
              }}
              >
              Easy
              </label>
          </LandingMediumContainer>                
      </div>
      </div>
    </Body>
    </>
  );

};

export default Landing;
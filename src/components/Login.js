import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
function Login() {
  return (
    <Container>
      <CtaBox>
        <Ctalogone src="/images/cta-logo-one.svg" />
       <Signup href="/" >GET All THERE</Signup> 
        <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/22, the price of Disney+
            and The Disney Bundle will increase.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
      </CtaBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 0px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.7;
    z-index: -1;
  }
`
const CtaBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width:50%;
  display:flex;
  flex-direction:column;
  
  `
  const Ctalogone = styled.img`
  
  `
  const Signup=styled.a`
  width:100%;
  background-color:#0063e5;
  font-weight:bold;
  padding:17px 0;
  color:#f9f9f9;
  border-radius:5px;
  text-align:center;
  letter-spacing:1.5px;
  font-size:18px;
  cursor:pointer;
  transition-duration:0.2s;
  margin-top:12px;
  margin-bottom:12px;

  &:hover{
    background:#0483ee;
  }
`
const Description=styled.div`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
margin-bottom:19px;

`
const CTALogoTwo=styled.img`
width: 90%;
`
import React from 'react'
import styled from 'styled-components'

function End() {
  return (
    <Container>
        <About>
            <span>About Disney+ Hotstar</span>
             <span>Terms Of Use</span>
             <span>Privacy Policy </span>
             <span>FAQ </span>
             <span>Feedback</span>
             <span>Careers</span>
        </About>
        <Tnc>
            <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
        </Tnc>

    </Container>
  )
}

export default End
const Container=styled.div`
position:relative;
height:30vh;
display:block;
`
const About=styled.div`

position:absolute;
top:20%;
span{
cursor:pointer;
flex-direction: row;
font-size:11px;
margin-right:18px;
transition-duration:0.2s;
color:#bfafaf6e;

&:hover{
color:white;
}
}

`

const Tnc=styled.div`
width:50%;
position:absolute;
top:40%;
p{
    word-wrap: break-word;  
    font-size:10px;
}
`
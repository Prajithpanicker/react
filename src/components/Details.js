import React from 'react'
import styled from 'styled-components'
function Details() {
  return (
    <Container>
        <Background>
            <img src="https://wallpapercave.com/wp/wp4503476.jpg"/>
        </Background>
        <Imagetitle>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/ddcgeqp-295da996-f10c-4419-b0f8-1f3c64b1d6ab.png/v1/fill/w_800,h_375,strp/doctor_strange_in_the_multiverse_of_madness_png_by_mintmovi3_ddcgeqp-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc1IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZGNnZXFwLTI5NWRhOTk2LWYxMGMtNDQxOS1iMGY4LTFmM2M2NGIxZDZhYi5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.KC-md65NLPPyhr7wOGE8ibz0VA3NCURE7sCD1HbJXss"/>
        </Imagetitle>

        <Controls>
            <Playbutton>
                <img src="/images/play-icon-black.png"/>
                <span>PLAY</span>
            </Playbutton>
            <Trailer>
            <img src="/images/play-icon-white.png"/>
            <span>TRAILER</span>

            </Trailer>
            <Addbutton>
                <span>+</span>
            </Addbutton>

            <Groupwatchbutton>
                <img src="/images/group-icon.png"/>
            </Groupwatchbutton>
        </Controls>

        <Subtitle>
        2018 • 7m • Family, Fantasy, Kids, Animation
        </Subtitle>
        <Description>
        A Chinese mom whos sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
        
    )
}

export default Details;

const Container = styled.div`
    min-height: calc(100vh - 50px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0; 
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Imagetitle=styled.div`
height:30vh;
width:35vw;
min-height:170px;
min_width:200px;

img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`

const Playbutton=styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;
transition-duration:0.4s;
&:hover{
    background:rgb(198,198,198);
}
`
const Trailer=styled(Playbutton)`
background:rgba(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:white;

`
const Addbutton=styled.button`
height:44px;
width:44px;
display:flex;
align-items:center;
justify-content:center;
border-radius:50px;
border:1px solid white;
background:#00000047;
cursor:pointer;
margin-right:16px;
span{
    font-size:30px;
    color:white;

}

`
const Groupwatchbutton=styled(Addbutton)`

`

const Subtitle=styled.div`
font-size:15px;
min-height:20px;
margin-top:26px;
`
const Description=styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);

`


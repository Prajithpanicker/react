import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Documentries() {
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        
      };
  return (
     
    <Container >
    <h4>Documentaries</h4>
    <Content  {...settings}>
       <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9885/1269885-v-38506a4291ec" alt=''/>
            
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8438/1208438-v-7007dde62b2d" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/699/1240699-v-3f501146ce8d" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9475/1259475-v-44a5faa7c630" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4557/1234557-v-6af995b46d98" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2235/1232235-v-6208310e6666" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5545/1195545-v-2781836a9a56" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7485/1117485-v-0b74106b75e5" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6490/1086490-v-e906986f148f" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/2671/1062671-v-63562bb16a0b" alt=''/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5887/1085887-v-ff820302bf78" alt=''/>
        </Wrap> 
    </Content>
    </Container>

  )
}

export default Documentries;


const Container=styled.div`


`
const Content=styled(Slider)`
display:flex;
width:60%;


.slick-list{
    overflow:visible;
    width:20%;
}
.slick-prev:before, .slick-next:before{
    display:none;
}

`
const Wrap=styled.div`
overflow:hidden;
transition-duration:0.2s;
cursor:pointer;
transition-delay: 0.5s;
border:none;

h1{
   
    position:absolute;
    top:0;
    
}

img{
    border-radius:8px;
    width:100%;
    height:100%;
    object-fit:cover;
    padding:5px;
   
}

 &:hover{
    transform:scale(1.4);
}
`

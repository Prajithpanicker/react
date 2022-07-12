import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Movies() {
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        
      };
  return (
    <Container >
        <h4>Recommended For You</h4>
        <Content  {...settings}>
          <a href='/detail'><Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9948/1279948-v-cc9471178e40"/>
                
            </Wrap></a>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1518/1161518-v-8d86a7ed8500"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8690/1078690-v-0cb0fd8d0f22"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5162/875162-v"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7519/1097519-v-7235f9a4b235"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8723/1078723-v-a1a04c7474f9"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4926/674926-v"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9317/1269317-v-c851767a526b"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3022/1083022-v-90c34f714f7a"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v"/>
            </Wrap>
            <Wrap>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v"/>
            </Wrap> 
        </Content>
        </Container>
  )
}

export default Movies;

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
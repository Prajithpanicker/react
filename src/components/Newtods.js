import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Newtods() {
    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        
      };
  return (
    
    <Container >
    <h4>New To Disney+</h4>
    <Content  {...settings}>
       <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9700/1289700-v-606bd48d21ab"/>
            
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3135/1293135-v-1c73bceda2cd"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9533/1289533-v-5aeb53904d21"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9568/1289568-v-54d3b892ac8c"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2353/1282353-v-ba90d44ce003"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6765/1286765-v-52ece6230aa3"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2350/1282350-v-15ffecf89380"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2347/1282347-v-57b71e72275e"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2849/1282849-v-e78761bbcf08"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1745/1281745-v-6ee7ff4440f2"/>
        </Wrap>
        <Wrap>
            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9063/1279063-v-4ebb6d8f0c48"/>
        </Wrap> 
    </Content>
    </Container>



  )
}

export default Newtods;


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
import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Nav>
          <Logo src="/images/logo.svg"/>
         <NavMenu>
            <a href='/'>
                <img src="/images/home-icon.svg" alt=''/>
                <span>Home</span>
            </a>
            <a href='/'>
                <img src="/images/search-icon.svg" alt=''/>
                <span>Search</span>
            </a>  
            <a href='/'>
                <img src="/images/watchlist-icon.svg" alt=''/>
                <span>Watchlist</span>
            </a>
            <a href='/'>
                <img src="/images/original-icon.svg" alt=''/>
                <span>Originals</span>
            </a>
            <a href='/'>
                <img src="/images/movie-icon.svg" alt=''/>
                <span>Movies</span>
            </a>
            <a href='/'>
                <img src="/images/series-icon.svg" alt=''/>
                <span>Series</span>
            </a>
         </NavMenu>
        <Link to='/login' >
         <Userimg src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
         </Link> 
         
    </Nav>
  )
}

export default Header;

const Nav=styled.nav`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding:0 36px;
overflow:hidden;
position:sticky;
`
const Logo=styled.img`
width:80px;

`
const NavMenu=styled.div`

display:flex;
flex:1;
margin-left:20px;


a{
    display:flex;
    align-items:center;
     padding:0 12px;
     cursor:pointer;
      text-decoration:none;
     color:white;

    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;

        &:after{
            content:"";
            background-color:white;
            left:0;
            right:0;
            bottom:-6px;
            position:absolute;
            height:2px;
           opacity:0;
            transform:scaleX(0);
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        }
    }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
    @media (max-width: 768px) {
         img{
            display:none;
         }
         span{
            display:none;
         }

      } 
`
const Userimg=styled.img`
width:48px;
height:48px;
border-radius:50px;
object-fit:cover;
cursor:pointer;



`

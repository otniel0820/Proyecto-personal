import styled from 'styled-components';

export const NavBarContainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: black;
`

export const NavWrapper = styled.div`
margin: auto;
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const IconLogo = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: white;
font-size: 1.5em;
padding-left: 1em;
`
export const Menu = styled.ul`
height: 100%;
display: flex;
gap: 3em;
justify-content: center;
align-items: center;
z-index:99;
padding-right: 1em;
@media screen and (max-width: 960px ){
    width: 100%;
    height: 92vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? '0':'-100%')};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #b7cdff;
}
`
export const MenuItem = styled.li`
height: 100%;

display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
font-weight: 400;
color: white;
z-index:99;
.links{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.links:hover{
    
    border-bottom: 0.3rem solid yellow;
    transition: 0.4s ease-in;
   
   
    
}
@media screen and (max-width: 960px ){
    width: 100%;
    height: 70px;
}
`
export const FaBarIcon = styled.div`
display: none;
@media screen and (max-width: 960px ) {
    display: flex;
    color: white;
    font-size: 2em;
    padding-right: 1em;
}
`


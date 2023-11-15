import styled from "styled-components";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
 
  top: 0;
  z-index: 99;
  background-color: rgb(28, 31, 39, 0.60) ;
  
`;

export const NavWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5em;
  padding-left: 1em;
  padding-top: 0.7em;
`;
export const Menu = styled.ul`
  height: 100%;
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: center;
  z-index: 99;
  padding-right: 1em;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 92vh;
    position: absolute;
    top: 80px;
    gap: 0px;
    left: ${({ click }) => (click ? "0" : "-100%")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #0f1219;
  }
`;
export const MenuItem = styled.li`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 400;
  color: white;
  z-index: 99;
  .links {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links:hover {
    border-top: 0.3rem solid #e53935;
    border-bottom: 0.3rem solid #e53935;
    transition: 0.1s ease-in;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
  }
`;
export const FaBarIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    color: white;
    font-size: 2em;
    padding-right: 1em;
  }
`;

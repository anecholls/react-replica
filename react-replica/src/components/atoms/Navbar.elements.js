import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position: sticky;
top: 0;
z-index: 99;
background-color: #2F303A; 
max-width: 1900px;
`;

export const NavbarWrapped = styled.div`
margin: auto;
width: 100%;
max-width: 1550px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
color: white;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-size: 1rem;
color: white;
`;

export const Menu = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

export const MenuItem = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-family: Poppins;
font-size: 1rem;
color: white;
`;

export const MenuItemLink = styled.div`
color: white;
text-decoration: none;
`;
import styled from "styled-components";

export const NavbarContainer = styled.div`
width: 100%;
height: 88px;
position: sticky;
top: 0;
z-index: 99;
background-color: #2F303A; 
`;

export const NavbarWrapped = styled.div`
margin: auto;
width: 100%;
max-width: 1380px;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: Poppins;
font-size: 1.2rem;
color: white;
`;
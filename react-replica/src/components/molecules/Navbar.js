import { Menu, MenuItem, MenuItemLink, NavbarContainer, NavbarWrapped } from "../atoms/Navbar.elements";
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
{/*import logo from './logo.svg';*/}


const Navbar = () => {
    return(
        <NavbarContainer>
            <NavbarWrapped>
                <logo/>
                <Link to="/">
                <h1>Soundwave</h1>
                </Link>
                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                        <Link to="discover">
                        <h1>Discover</h1>
                        </Link> 
                        </MenuItemLink>
                    </MenuItem>
                </Menu>

                <Menu>
                    <MenuItem>
                        <MenuItemLink>
                        <Link to="join">
                        <h1>Join</h1>
                        </Link> 
                        </MenuItemLink>
                    </MenuItem>
                </Menu>
            </NavbarWrapped>
        </NavbarContainer>


    );
};

export default Navbar 

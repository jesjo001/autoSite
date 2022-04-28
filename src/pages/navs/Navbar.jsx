import styled from 'styled-components'
import {
  Link
} from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <span>Automation Lounge</span>
      </LogoContainer>

      <TabArea>
        <NavItem>
          <ListItem><NavLink to="">Solution</NavLink></ListItem>
          <ListItem><NavLink to="">Products</NavLink></ListItem>
          <ListItem><NavLink to="">About</NavLink></ListItem>
          <ListItem><NavLink to="">Contact</NavLink></ListItem>
        </NavItem>

        <Stack spacing={2} direction="row" style={{paddingRight: 20}}>
          <Button variant="contained" style={{ color:"purple", backgroundColor: "white", fontSize: '0.25em', borderRadius: 6, fontWeight: 400 }} >Login</Button>
          <Button variant="contained" style={{ color:"white", backgroundColor: "orange", fontSize: '0.25em', borderRadius: 6, fontWeight: 600, height: 30 }}>Sign Up</Button>
        </Stack>
      </TabArea>


    </Nav>
  );
}

export default Navbar;


const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  font-family: 'Mulish', sans-serif;
  font-size: 2em;
  padding-top:20px;
  padding-bottom:20px;
  border-bottom: 1px solid #91B7DC;
  position: absolute;
  top: 0px;
  color: grey;
`

const LogoContainer = styled.div`
  font-size: 0.6em;
  margin-left: 50px;
`

const TabArea = styled.div`
  display: flex;
  flex-direction: row;
    
`

const NavItem = styled.ul`
  font-size: 0.6em;
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-right: 50px;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: grey;
`

const ListItem = styled.li`
  display: inline;
  padding-left: 20px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 0.7em;
  font-weight: 600;
`



import React from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';

const Navbar = ({setFormOpen}) => {
    return ( 
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight:'10px'}}/>
                </Menu.Item>
                <Menu.Item name='Events'/>
                <Menu.Item>
                    <Button onClick={()=>setFormOpen(true)} inverted positive content='Create Event'/>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <Button inverted basic content='Login'/>
                        <Button style={{marginLeft:'1rem'}} basic inverted content='Register'/>
                    </Menu.Item>
            </Container>

        </Menu>
     );
}
 
export default Navbar;
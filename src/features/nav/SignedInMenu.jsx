import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const SignedInMenu = ({signOut}) => {
    return ( 
        <Menu.Item position='right'>
            <Image avatar spaced src='/assets/user.png' />
            <Dropdown pointing='top left' text='Hasan'>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                    <Dropdown.Item  text='My Profile' icon='user'/>
                    <Dropdown.Item onClick={signOut} text='Sign Out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>


        </Menu.Item>
     );
}
 
export default SignedInMenu;
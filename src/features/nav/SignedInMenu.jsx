import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../auth/authActions';


const SignedInMenu = ({signOut}) => {
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=>state.auth)
    const history=useHistory();
    const userEmail=currentUser.email.slice(0,2)
    return ( 
        <Menu.Item position='right'>
            <Image avatar spaced src={currentUser.photoURL || '/assets/user.png'} />
            <Dropdown pointing='top left' text={userEmail.toUpperCase()}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                    <Dropdown.Item  text='My Profile' icon='user'/>
                    <Dropdown.Item onClick={()=>{
                        dispatch(signOutUser());
                        history.push('/')
                    }} text='Sign Out' icon='power'/>
                </Dropdown.Menu>
            </Dropdown>


        </Menu.Item>
     );
}
 
export default SignedInMenu;
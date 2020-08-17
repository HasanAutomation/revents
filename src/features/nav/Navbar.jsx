import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink,  } from 'react-router-dom';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

const Navbar = ({ setFormOpen }) => {
  const {authenticated} = useSelector(state=>state.auth)

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to="/" exact>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: '10px' }}
          />
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        <Menu.Item as={NavLink} to="/sandbox" name="Sandbox" />
        {authenticated && (
          <Menu.Item as={NavLink} to="createEvent">
            <Button inverted positive content="Create Event" />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu />
        ) : (
          <SignedOutMenu/>
        )}
      </Container>
    </Menu>
  );
};

export default Navbar;

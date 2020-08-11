import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({setAuthenticated}) => {
    return ( 
        <Menu.Item position="right">
          <Button onClick={()=>setAuthenticated(true)} inverted basic content="Login" />
          <Button
            style={{ marginLeft: '1rem' }}
            basic
            inverted
            content="Register"
          />
        </Menu.Item>
     );
}
 
export default SignedOutMenu;
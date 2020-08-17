import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../app/common/modals/modalReducer';

const SignedOutMenu = ({setAuthenticated}) => {
  const dispatch=useDispatch()
    return ( 
        <Menu.Item position="right">
          <Button onClick={()=>dispatch(openModal({modalType:'LoginForm'}))} inverted basic content="Login" />
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
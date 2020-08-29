import React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ErrorComponent = () => {
    const {error}=useSelector(state=>state.async)
    return ( 
        <Segment placeholder>
            <Header textAlign='center' content={error?.message || 'Oops we have an error' }/>
            <Button as={Link} to='/events' content='Return to events' primary style={{marginTop:20}} />
        </Segment>
     );
}
 
export default ErrorComponent;
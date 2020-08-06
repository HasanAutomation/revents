import React from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

const EventForm = ({setFormOpen}) => {
    return ( 
        <Segment clearing>
            <Header content='Create new event'/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder='Event title'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City'/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue'/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date'/>
                </Form.Field>
                <Button content='Submit' type='submit' positive floated='right'/>
                <Button onClick={()=>setFormOpen(false)} content='Cancel' type='submit'  floated='right'/>
                
            </Form>
        </Segment>
     );
}
 
export default EventForm;
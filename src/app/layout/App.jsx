import React,{useState} from 'react';
import Navbar from '../../features/nav/Navbar';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;

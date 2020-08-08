import React, { useState } from 'react';
import Navbar from '../../features/nav/Navbar';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);


  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  };
  return (
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} selectedEvent={selectedEvent} selectEvent={handleSelectEvent}/>
      </Container>
    </>
  );
}

export default App;

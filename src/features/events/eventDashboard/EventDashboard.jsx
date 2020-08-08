import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/SampleData';

const EventDashboard = ({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) => {
  const [events, setEvents] = useState(sampleData);

  const createEvent = (event) => {
    setEvents([...events, event]);
  };

  const handleUpdateEvent=(updatedEvent)=>{
    setEvents(events.map(evt=>evt.id===updatedEvent.id ? updatedEvent : evt))
    selectEvent(null)
  }

  const handleDeleteEvent=(id)=>{
    setEvents(events.filter(event=>event.id!==id))
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            createEvent={createEvent}
            setFormOpen={setFormOpen}
            selectedEvent={selectedEvent}
            key={selectedEvent ? selectedEvent.id : null}
            updateEvent={handleUpdateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;

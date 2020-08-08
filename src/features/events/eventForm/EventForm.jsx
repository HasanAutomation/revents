import React, { useState } from 'react';
import { Segment, Header, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';

const EventForm = ({
  setFormOpen,
  createEvent,
  selectedEvent,
  updateEvent,
}) => {
  let initialState = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  //   useEffect(()=>{
  //       document.title='This is a form page'
  //   })

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Hasan',
          hostPhotoURL: '/assets/user.png',
          attendees: [],
        });
    setFormOpen(false);
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the Event' : 'Create new event'} />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event title"
            value={values.title}
            name="title"
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            value={values.description}
            name="description"
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            name="date"
            value={values.date}
            onChange={(e) => handleChange(e)}
          />
        </Form.Field>
        <Button content="Submit" type="submit" positive floated="right" />
        <Button
          onClick={() => setFormOpen(false)}
          content="Cancel"
          type="submit"
          floated="right"
        />
      </Form>
    </Segment>
  );
};

export default EventForm;

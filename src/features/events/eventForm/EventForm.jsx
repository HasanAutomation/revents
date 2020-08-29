import React from 'react';
import { Segment, Header, Button, Confirm } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listenToEvents } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc';
import { listenToEventFromFirestore, updateEventInFirestore, addEventToFirebase, cancelEventToggle } from '../../../app/firestore/firestoreService';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { toast } from 'react-toastify';
import { useState } from 'react';

const EventForm = ({ match, history }) => {
  const [loadingCancel,setLoadingCancel]=useState(false);
  const [confirmOpen,setConfirmOpen]=useState(false);
  const dispatch = useDispatch();

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const {loading,error}=useSelector(state=>state.async)

  let initialState = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  //loading cancel handler
  async function handleCancelToggle(event){
    setConfirmOpen(false);
    setLoadingCancel(true)
    try {
      await cancelEventToggle(event);
      setLoadingCancel(false)
    } catch (error) {
      setLoadingCancel(true);
      toast.error(error)
    }
  }

  useFirestoreDoc({
    shouldExecute:!!match.params.id,
    query:()=>listenToEventFromFirestore(match.params.id),
    data:event=>dispatch(listenToEvents([event])),
    deps:[match.params.id,dispatch]
  })

if(loading) return <LoadingComponent content='Loading event...'/>
if(error) return <Redirect to='/error' />

  return (
    <Segment clearing>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={async (values,{setSubmitting}) => {
          try {
            selectedEvent
            ? await updateEventInFirestore(values)
            : await addEventToFirebase(values)
          history.push('/events');
            
          } catch (error) {
            toast.error(error);
            setSubmitting(false);
          }
         
        }}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />
            <MyTextInput name="title" placeholder="Event title" />
            <MySelectInput
              name="category"
              placeholder="Category"
              options={categoryData}
            />
            <MyTextArea name="description" placeholder="Description" />
            {/* <MyTextInput name="description" placeholder="Description" /> */}

            <Header sub color="teal" content="Event Location Details" />
            <MyTextInput name="city" placeholder="City" />
            <MyTextInput name="venue" placeholder="Venue" />
            <MyDateInput
              name="date"
              placeholderText="Event date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d,yyyy h:mm a"
            />
            {selectedEvent &&
               <Button loading={loadingCancel} onClick={()=>setConfirmOpen(true)}  content={selectedEvent.isCancelled ? 'Reactivate event' :'Cancel Event'} type="button" floated="left"  color={selectedEvent.isCancelled ? 'green' :'red'}/>
            }

            <Button loading={isSubmitting} disabled={!isValid || isSubmitting || !dirty } content="Submit" type="submit" positive floated="right"/>
            <Button
            disabled={isSubmitting}
              as={Link}
              to="/events"
              content="Cancel"
              type="submit"
              floated="right"
            />
          </Form>
        )}
      </Formik>
      <Confirm open={confirmOpen} content={selectedEvent?.isCancelled ? 'This will reactivate the event | Are you sure ? ' : 'This will cancel the vent | Are you sure ?'} onCancel={()=>setConfirmOpen(false)} onConfirm={()=>handleCancelToggle(selectedEvent)} />
    </Segment>
  );
};

export default EventForm;

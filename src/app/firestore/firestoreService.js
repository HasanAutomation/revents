import firebase from '../config/firebase';
import cuid from 'cuid';

const db=firebase.firestore();


//shape data
export const dataFromSnapshot=(snapshot)=>{
    if(!snapshot.exists) return undefined;
    const data=snapshot.data();

    for(const prop in data){
        if(data.hasOwnProperty(prop)){
            if(data[prop] instanceof firebase.firestore.Timestamp){
                data[prop]=data[prop].toDate()
            }
        }
    }

    return {
        ...data,
        id:snapshot.id
    }
}

//get events
export const listenToEventsFromFirestore=()=>{
    return db.collection('events').orderBy('date');
}

//for single document
export const listenToEventFromFirestore=(eventId)=>{
    return db.collection('events').doc(eventId);
}

//add event to firebase
export const addEventToFirebase=(event)=>{
    return db.collection('events').add({
        ...event,
        hostedBy:'Madhu',
        hostPhotoURL:'https://randomuser.me/api/portraits/men/23.jpg',
        attendees:firebase.firestore.FieldValue.arrayUnion({
            id:cuid(),
            displayName:'Madhu',
            photoURL:'https://randomuser.me/api/portraits/men/23.jpg'
        })
    })
}

//update event
export const updateEventInFirestore=(event)=>{
    db.collection('events').doc(event.id).update(event);
}

//delete event
export const deleteEventInFirestore=(eventId)=>{
    db.collection('events').doc(eventId).delete();
}

//cancel an event
export const cancelEventToggle=(event)=>{
    db.collection('events').doc(event.id).update({
        isCancelled:!event.isCancelled
    })
}
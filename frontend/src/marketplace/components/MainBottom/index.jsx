import React from 'react';
import EventCard from '../CandidateCard';

import './styles.css';

import { events } from './sampleEvents';

// export const filterEvents = (events, searchText) => {
//   return events.filter(event => {
//     const { name, city, state } = event.attributes;
//     const text = name + ' ' + city + ' ' + state;
//     return text.toUpperCase().includes(searchText.toUpperCase());
//   });
// };

// export const filterUserEvents = (userEvents, status) => {
//   return userEvents.filter(event => event.attributes.status === status);
// };

// export const filterEventsByDate = (userEvents, future) => {
//   const filteredEvents = filterUserEvents(userEvents, 'attending');
//   return filteredEvents.filter(event => {
//     const eventDate = new Date(event.attributes.end_date);
//     return future ? eventDate >= Date.now() : eventDate < Date.now();
//   });
// };

export const EventContainer = () => {
  //   const styles = pathname.includes('profile') ? 'EventContainer profile' : 'EventContainer home';

  let shownEvents = events;

  //   if (pathname.includes('upcoming')) {
  //     shownEvents = filterEventsByDate(userEvents, true);
  //   } else if (pathname.includes('past')) {
  //     shownEvents = filterEventsByDate(userEvents, false);
  //   } else if (pathname.includes('wishlist')) {
  //     shownEvents = filterUserEvents(userEvents, 'wishlist');
  //   } else {
  //     shownEvents = searchText.length ? filterEvents(events, searchText) : events;
  //   }

  // the events pulled from state will be filtered according to the current pages pathname then mapped over and rendered in the event container
  return (
    <div className="EventContainer profile">
      {shownEvents.length ? (
        shownEvents.map(event => {
          const { name, image_url, city, state, start_date } = event.attributes;
          return (
            <EventCard
              id={event.id}
              key={event.id}
              name={name}
              image={image_url}
              city={city}
              state={state}
              date={start_date}
            />
          );
        })
      ) : (
        <h2>No events to show</h2>
      )}
    </div>
  );
};

export default EventContainer;

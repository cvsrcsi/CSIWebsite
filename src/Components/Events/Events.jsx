import React from 'react';
import { Carousel } from 'react-responsive-carousel'; 
import eventsData from '../../Assets/events.json';
import './events.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


function EventCard({ id, name, date, images, objective }) {
  return (
    <Link to={`/events/${id}`}>
    <div className="card" style={{ backgroundColor: '#13387F' }}>
      <div className='' >
      <Carousel className='carouselcontainer' autoPlay={true} infiniteLoop={true} showThumbs={false}> 
        {images.map((image, index) => (
          <div   style={{ display:'flex', justifyContent:'center', alignItems:'center'}}
          key={index}>
            <img width='300px' src={`../../src/Components/${image}`} alt={`${name} - ${index}`} />
          </div>
        ))}
      </Carousel>
      </div>
      <p className="tip">{name}</p>
      <p className="second-text">{date}</p>
    </div>
    </Link>
  );
}

function Events() {
  const events = eventsData.events;

  return (
    <div className="eventcards">
      {events.map((event, index) => (
        <EventCard
          key={index}
          id={event.id}
          name={event.name}
          date={event.date}
          images={event.images}
          objective={event.objective}
        />
      ))}

      <Footer/>
    </div>
  );
}

export default Events;

import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../../Assets/events.json';
import { Carousel } from 'react-responsive-carousel';
import './event.css';
import Footer from '../Footer';

function Event() {
    const { id } = useParams(); 
    const event = eventsData.events.find((event) => event.id === parseInt(id)); 

    if (!event) {
        return <div>Event not found</div>; 
    }


    const { name, date, images, objective } = event;

    return (
        <div style={{ paddingTop: '120px' }}>
            
            <div className="event-container" >
                {console.log(event)}
                <div className="event-details">
                    <h2 className="event-title">{name}</h2>
                    <p className="event-date">Held on : {date}</p>
                    <div className="">
                        <Carousel autoPlay infiniteLoop className="carousel-container" showThumbs={false}>
                            {event.images.map((image, index) => (
                                <div key={index}>
                                    <img src={(`../../${image}`)} alt={`${name} - ${index}`} />
                                </div>
                            ))}
                        </Carousel>

                    </div>
                    <p className="objective-container event-objective"><div dangerouslySetInnerHTML={{ __html: objective }} /></p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Event;

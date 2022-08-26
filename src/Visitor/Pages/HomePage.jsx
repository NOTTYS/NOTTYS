import React from 'react'
import Carousels from '../Components/Carousel'
import EventAtHome from '../Components/EventAtHomePage';
import LuckyNameAtHomePage from '../Components/LuckyNameAtHomePage';

function HomePage() {
  return (
    <div>
        <Carousels/>
        <LuckyNameAtHomePage/>
        <EventAtHome/>
    </div>
  )
}

export default HomePage
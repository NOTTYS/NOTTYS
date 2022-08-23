import React from 'react'
import LuckyGuys from '../JSON/LuckyGuys.json'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Assets/sass/LuckyName.scss'

function LuckyNameAtHomePage() {
  const LuckName = LuckyGuys.slice(0, 9)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };
  return (
    <div className='my-5'>
      <p className='fs-1 text-center fw-bold'>ຊື່ຜູ້ໂຊກດີ</p>
      <div className='shadow-sm my-4 py-5 w-75 d-block mx-auto bg rounded rounded-4'>
        <div>
          <Carousel
            draggable={false}
            showDots={true}
            infinite={true}
            swipeable={false}
            ssr={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            responsive={responsive}
            keyBoardControl={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
            className='carousel-luckyname'
          >
            {LuckName.map((e) => (
              <div className='justify-content-center'>
                <Card key={e.id} className='cardbox' style={{ width: '17rem' }}>
                  <Card.Body>
                    <Card.Title className='text-center fw-bold'>{`ຊື່ ${e.firstname} ${e.lastname}`}</Card.Title>
                    <hr />
                    <Card.Title className='text-center mb-3'>{`ງວດທີ ${e.value}`}</Card.Title>
                    <Card.Title style={{backgroundColor: "#FF7F3F"}} className='text-center text-white prize'>{`${e.prize}`}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Carousel>

        </div>
      </div>

    </div>
  )
}

export default LuckyNameAtHomePage
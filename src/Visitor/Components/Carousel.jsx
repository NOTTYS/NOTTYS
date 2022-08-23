import React from 'react'
import '../Assets/sass/carousel.scss'
import Carousel from 'react-bootstrap/Carousel';
import image from '../Assets/images/1003880.png'

function Carousels({slides}) {

  // const images = [
  //   "https://multimedia.riverplus.com/wp-content/uploads/2020/10/B1-2.png",
  //   "https://www.techreviewer.com/learn-about-tech/tv-resolutions/1280-505-1/tv-resolutions-example.jpg",
  //   "https://multimedia.riverplus.com/wp-content/uploads/2020/10/B1-2.png",
  //   "https://www.techreviewer.com/learn-about-tech/tv-resolutions/1280-505-1/tv-resolutions-example.jpg",
  // ]
  // const [currentSlide, setCurrentSlide] = useState(0)

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     setCurrentSlide(currentSlide => currentSlide < images.length - 1 ? currentSlide + 1 : 0)
  //   }, 8000)

  //   return() =>clearInterval(slideInterval)
  // }, [])
  
  // const prev = () => {
  //   const index = currentSlide < 0 ? currentSlide - 1: slides.length - 1
  //   setCurrentSlide(index)
  // }

  // const next = () => {
  //   const index = currentSlide < slides.length - 1 ? currentSlide + 1: slides.length - 1
  //   setCurrentSlide(index)
  // }
  
  return (
    <div>
      <div>
     <Carousel>
      <Carousel.Item>
        <img
        height={650}
          className="w-100 img-fluid"
          src='https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/275c594a-Sarangkot-Sunrise-View/SarangkotSunriseView-Klook.jpg'
          alt="First slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={650}
          className="w-100 img-fluid"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
        height={650}
          className="w-100 img-fluid"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       {/* <div className='container'>
        <div className="carousel">
        <div style={{transform: `translate(${-currentSlide * 100}%)`}} className='carousel-inner'>
            {images.map((slides, index) => (
              <div className='carousel-item'>
              <img className='image' src={slides} alt="" />
          </div>
            ))}
        </div>
        <div>{currentSlide}</div>
        
        
        </div>
        
       </div>
       <div className='buttons'>
       <button onClick={prev} style={{transform: `translate(${-currentSlide * 100}%)`}} className='carousel-control left'>Back</button>
       <button onClick={next} className='carousel-control right'>Next</button>
       </div> */}
       </div>
  </div>
  )
}

export default Carousels
import React from 'react'
import Card from 'react-bootstrap/Card'
import data from '../JSON/data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from '../Assets/images/logo.jpg'

function About() {

  return (
    <div className='container border border-5 my-5'>
      <div className='position-relative my-3'>
      <img className='d-block mx-auto image' height={250} src={logo} alt="" />
      </div>
      <p className='fs-1 fw-bold text-center'>ຄວາມເປັນມາຂອງບໍລິສັດ</p>
    <div style={{height: "auto"}}  className='container mt-2'>
        <div className='container rounded rounded-3'>
        <p className='p-4 fs-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa perferendis esse cupiditate placeat, a tempora incidunt porro similique, aliquam facilis voluptate, fuga illo maiores eos. Temporibus impedit vitae eligendi consequuntur reiciendis ipsa laboriosam. Quo soluta modi consequatur, consectetur cumque error ea ducimus amet, quis eum quod voluptas sapiente molestiae iusto, necessitatibus explicabo aspernatur. Tenetur natus, dolores aliquam fuga corporis minima ad laborum! Facere voluptatem sapiente velit explicabo similique natus officia molestias non quos id. Natus esse reiciendis, animi iusto vero suscipit cum autem consectetur voluptas corporis in voluptate id voluptatum maxime error atque aut accusantium eligendi. Laboriosam, ipsum voluptatum.</p>
        </div>
    </div>
    {/* <p className='fs-1 fw-bold text-center mt-5'>ເຄື່ອຂ່າຍຂອງພວກເຣົາ</p>
    <div className="row mt-5 d-flex justify-content-center mx-auto">
        {data.map((e) => 
             <Card key={e.id} className='border-0 mx-4' style={{ width: '20rem' }}>
             <img className='shadow-sm w-100 h-75' src={e.image} alt="" />
             <Card.Body>
               <Card.Title className='text-center fw-bold'>{e.name}</Card.Title>
             </Card.Body>
           </Card>
          )}
          </div>

          <h1 className='text-center fs-1 mt-5 '>How can we help</h1>
          <div className='row my-4 justify-content-center my-5'>
             <div className='border border-2 align-items-center justify-items-center rounded rounded-3 mx-5 mb-5' style={{backgroundColor: "gainsboro", width: 300}}>
              <FontAwesomeIcon className='d-block mx-auto mt-5 mb-2' icon={faMagnifyingGlassLocation} fontSize={35}/>
             <p className='text-center fs-5 mb-5'>Location</p>
              </div>
         
             <div className='border border-2 align-items-center justify-items-center rounded rounded-3 mx-5 mb-5' style={{backgroundColor: "gainsboro", width: 300}}>
              <FontAwesomeIcon className='d-block mx-auto mt-5 mb-2' icon={faPhone} fontSize={35}/>
             <p className='text-center fs-5 mb-5'>+856 20 555 333 90</p>
              </div>
              </div> */}

    </div>
  )
}

export default About
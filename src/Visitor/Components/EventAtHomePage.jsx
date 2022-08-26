import React from 'react'
import '../Assets/sass/Prize.scss'
import { Button, Card } from 'react-bootstrap';
import data from '../JSON/data.json'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function EventAtHome() {

  return (
    <div>
      {/* <Iframe allow="fullscreen" url="https://www.youtube.com/embed/MjVD6oUtkSo"
        
        position="relative"/> */}
      <div className='mt-5 w-100'>
        <p className='fs-1 fw-bold textActivity text-center' >ກິດຈະກຳ</p>
      </div>
      <div className='form position-relative ps-3 backgroundEvent'>
        <div className='row w-100 justify-content-center position-absolute Event' data-aos='fade-left' data-aos-duration="2000">
          {data.map((e) =>
            <div className='cardBox justify-items-center imgZoom'>

              <Card key={e.id} className='mt-4 mx-3 shadow'>
                <Link to='/DetailEvent'>
                  <img className='shadow-sm w-100 h-25' src={e.image} alt="" />
                </Link>
                {/* <Card.Img  variant="top" src={
                    e.image
                  } /> */}
                <Card.Body>
                    <FontAwesomeIcon className='pe-2 text-muted' icon={faClock} fontSize={20}/><span className='text-muted'>{`12/09/2022-02/12/2022`}</span>
                  <div className='text-truncate-container mt-2'>
                    <p className='text-center text-black text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Q
                      uo vel pariatur odio laborum aspernatur repellat placeat, ea repudiandae dolorem nemo, reprehenderit ipsum minima eum quos? Soluta, optio! Laboriosam qui natus consectetur nam molestiae quas maiores temporibus beatae, atque incidunt suscipit animi. Sed cumque possimus fugit rerum soluta molestias odit ratione!</p>
                  </div>
                </Card.Body>
                <Link to='/DetailEvent'><Button className='mb-3 d-block mx-auto fs-5 btn'>ເບິ່ງລາຍລະອຽດ</Button></Link>
              </Card>
            </div>
          )}
        </div>

      </div>

    </div>

  )
}

export default EventAtHome

//   < CDBBox display = "flex" className = "justify-content-between footer" >
// <CDBBox>
//   <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
//     ຕິດຕໍ່
//   </p>

//   <CDBBox className='text-center' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
//     <div className='d-flex align-items-center mb-3'>
//       <FontAwesomeIcon icon={faFacebook} fontSize={40} />
//       <span href="" className='text-white'>Heaven11111loan@gmail.com</span>
//     </div>
//     <div className='d-flex align-items-center mb-3'>
//       <FontAwesomeIcon icon={faWhatsapp} fontSize={40} />
//       <span href="" className='text-white'>Heaven11111loan@gmail.com</span>
//     </div>
//     <div className='d-flex align-items-center mb-3'>
//       <FontAwesomeIcon icon={faMailBulk} fontSize={40} />
//       <span href="" className='text-white'>Heaven11111loan@gmail.com</span>
//     </div>

//   </CDBBox>
// </CDBBox>

// <CDBBox>
//   <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
//     ເມນູທັງຫມົດ
//   </p>

//   <CDBBox className='text-center' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
//     <p href="" className='text-white'>ຫນ້າຫລັກ</p>
//     <p href="" className='text-white'>ຫນ້າສຸ່ມ</p>
//     <p href="" className='text-white'>ຜູ້ໂຊກດີ</p>
//     <p href="" className='text-white'>ກ່ຽວກັບ</p>
//   </CDBBox>
// </CDBBox>

// <CDBBox>
//   <p className="h5 mb-4 " style={{ fontWeight: '600' }}>
//     ທີ່ຕັ້ງບໍລິສັດ
//   </p>

//   <CDBBox className='' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
//     <p href="" className='text-white'>Syshai Village</p>
//     <p href="" className='text-white'>Sykhodtabong District</p>
//     <p href="" className='text-white'>Vientiane Capital</p>

//   </CDBBox>
// </CDBBox>


// </ >

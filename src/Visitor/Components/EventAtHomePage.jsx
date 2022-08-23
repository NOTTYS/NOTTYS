import React from 'react'
import '../Assets/sass/Prize.scss'
import { Button, Card } from 'react-bootstrap';
import data from '../JSON/data.json'
import { Link } from 'react-router-dom';


function EventAtHome() {

  return (
    <div>
      {/* <Iframe allow="fullscreen" url="https://www.youtube.com/embed/MjVD6oUtkSo"
        
        position="relative"/> */}
      <div className='mt-5'>
        <p className='fs-1 text-center fw-bold'>ກິດຈະກຳ</p>
      </div>
      <div className='form h-auto'>
        <div className='row justify-content-center'>
          {data.map((e) =>
            <div className='cardBox justify-items-center '>
              
                <Card key={e.id} className='mt-4 mx-3 shadow'>
                <Link to='/DetailEvent'>
                  <img className='shadow-sm imgZoom w-100 h-25' src={e.image} alt="" />
                  </Link>
                  {/* <Card.Img  variant="top" src={
                    e.image
                  } /> */}
                  <Card.Body>
                    <Card.Title className='text-center fw-bold text-black'>{e.name}</Card.Title>
                    <Link to='/DetailEvent'><Button className='mt-5 d-block mx-auto w-50 fs-5 btn'>ເບິ່ງລາຍລະອຽດ</Button></Link>
                  </Card.Body>
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

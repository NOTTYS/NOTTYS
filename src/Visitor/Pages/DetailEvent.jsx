import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendarCheck, faCalendarDay, faCalendarDays, faCalendarTimes, faStar } from '@fortawesome/free-solid-svg-icons'
import '../Assets/sass/DetailEvent.scss'


function DetailEvent() {
  return (
    <div>
        <Container className='mt-2 mb-5'>
            <Row>
                <Col className='text-center'>
                    <img className='my-5 img d-block mx-auto' height={875} width={750} src="https://www.laotel.com/BBImages/TopPromotionSlide/Website/FTTHTopPrice1.jpg" alt="" />
                </Col>

                <Col>
                    <h2 className='text-center my-5'>ລາຍລະອຽດກິດຈະກຳ</h2>
                    <hr />
                    <p className='px-2'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore cumque dignissimos, laborum quas similique error sunt obcaecati reprehenderit blanditiis amet molestiae id iste placeat facilis animi eaque atque ullam. Harum animi sunt minima itaque deleniti similique vero cumque, recusandae corporis, necessitatibus iusto vitae adipisci earum, laborum dolor cum inventore?
                    </p>
                    <div className='d-flex align-items-center mb-3'>
                <FontAwesomeIcon className='ms-3' icon={faStar} color="gold"/><span className='fw-bold fs-5 ms-2'>ກະຕິກາການລຸ້ນໂຊກ</span>
                </div>
                <p className='ms-2'>1. ຊື້ຫວຍ 10,000 ກີບຂື້ນໄປ</p>
                <p className='ms-2'>2. ຂຽນລາຍລະອຽດໃຫ້ຄົບຖ້ວນດັ່ງນີ້:</p>
                <ul className='ms-2'>
                    <li>ຊື່ ແລະ ນາມສະກຸນ</li>
                    <li>ເບີໂທ</li>
                    <li>ບ້ານ, ເມືອງ, ແຂວງ</li>
                    <li>ເລກໃບບິນ</li>
                    <li>ລາຄາລວມຂອງບິນຫວຍທີ່ຊື້</li>
                </ul>
                <p className='ms-2'>3. ຖ່າຍຣູບບິນ ແລ້ວສົ່ງມາທີ່ Whatsapp ທາງບໍລິສັດ</p>
                <div className='d-flex align-items-center my-4'>
                <img className='ms-3' width={50} src="https://media.istockphoto.com/vectors/calendar-and-clock-icon-vector-id1001687382?k=20&m=1001687382&s=170667a&w=0&h=8ca7Z4N7HDfLOKEIq-KWc-yaS_UJ0QNtrv3VPqpbONs=" alt="" />
                <span className='fw-bold fs-5 ms-2'>ເລີ່ມວັນທີ 12/09/2022 - 02/12/2022</span>
                </div>
                <div className='d-flex align-items-center my-4'>
                <img className='ms-3' width={50} src="https://play-lh.googleusercontent.com/NjybRef1fup2kZyJqSCc6rmJivWv9T1sW2OPkzbH9JR9VmVup-lN9hskanK1isDyKjYN" alt="" />
                <span className='fw-bold fs-5 ms-2'>ສຸ່ມ 1 ຄັ້ງຕໍ່ອາທິດ</span>
                </div>
                <div className='d-flex align-items-center my-4'>
                <img className='ms-3' width={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png" alt="" />
                <img className='ms-2' width={40} src="https://i.pinimg.com/originals/11/f2/fd/11f2fd963a2028fa67ce38ffe0e92bc5.png" alt="" />
                <span className='fw-bold fs-5 ms-2'>ຕິດຕາມໃດ້ທາງເພຈ Facebook ແລະ Website</span>
                </div>
                <div className='my-5 border border-2 w-100'>
                    <h5 className='p-3 text-center f'>
                        ຕິດຕໍ່ສະຫມັກວຽກ Call: +856 20 550 932 05
                    </h5>
                </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DetailEvent
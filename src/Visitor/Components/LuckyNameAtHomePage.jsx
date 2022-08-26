import React from 'react'
import LuckyGuys from '../JSON/LuckyGuys.json'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Assets/sass/LuckyName.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function LuckyNameAtHomePage() {
   AOS.init()
  const LuckName = LuckyGuys.slice(0, 4)

  return (
    <div className='my-5 boxsize'>
      <div className='shadow-sm w-100 d-block mx-auto backgroundLuckyName position-absolute'>
        <p className='pt-3 float-end pe-3 viewAll'>ເບິ່ງຂໍ້ມູນທັງຫມົດ</p>
        <div className='position-absolute text-center p-2 fs-1 backgroundLucky text-white fw-bold shadow'>
          ຜູ້ໂຊກດີ
        </div>
          <div className='pt-5 row justify-content-center w-100 CardLucky' data-aos='fade-right' data-aos-duration="2000">
            {LuckName.map((e) =>
              <div key={e.id} className='mx-3 mb-4 luckybox shadow' style={{ width: '18rem' }}>
                  <p className='mt-4 text-center fw-bold fs-3 textColor'>{`${e.firstname}`} <br /> {`${e.lastname}`}</p>
                  <hr className='line'/>
                  <p className='mt-4 text-center fw-bold fs-3 textColor'>{`ເລກບິນ`} <br /> {`${e.prize}`}</p>
                  <p className='text-center fw-bold fs-3 text-center fw-bold fs-3 backgroundPrize py-3'>{`ລາງວັນ: ${e.prize}`}</p>
              </div>
            )}
          </div>

      </div>
    </div>
  )
}

export default LuckyNameAtHomePage
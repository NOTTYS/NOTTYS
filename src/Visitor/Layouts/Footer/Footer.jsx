import React from 'react'
import { CDBBox, CDBFooter} from 'cdbreact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/sass/Footer.scss'

function Footer() {

  return (
    <div>
      <CDBFooter className="shadow mt-auto footer text-white">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <CDBBox className="mb-2">
                <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
                  ຕິດຕໍ່
                </p>

                <CDBBox className='text-center' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                  <div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon icon={faFacebook} fontSize={40} />
                    <span href="" className='text-white ms-2'>SBS Trade of Service</span>
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon icon={faWhatsapp} fontSize={40} />
                    <span href="" className='text-white ms-2'>+856 20 555 333 90</span>
                  </div>
                  <div className='d-flex align-items-center mb-3'>
                    <FontAwesomeIcon icon={faMailBulk} fontSize={40} />
                    <span href="" className='text-white ms-2'>Heaven11111loan@gmail.com</span>
                  </div>

                </CDBBox>
              </CDBBox>
              {/* <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img width="100px"  alt="logo" src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/267449183_104901058719162_4702259589893712784_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g9tRCr14V0YAX8fEvPB&_nc_ht=scontent.fvte2-3.fna&oh=00_AT_sEjG0NQqK3YCGk0Exw4qUU--M07aFHsTqx8GaWJ5aiw&oe=62F0D63C"/>
              <span className="ml-3 h5 font-weight-bold text-white ms-3">SBS</span>
            </a>
            <p className="my-3" style={{ width: '200px' }}>
              {"_"}We are creating High Quality Resources and tools to Aid developers during the
              developement of their projects.
            </p> */}
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4 text-center" style={{ fontWeight: '600' }}>
                ເມນູທັງຫມົດ
              </p>

              <CDBBox className='text-center' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <p href="" className='text-white'>ຫນ້າຫລັກ</p>
                <p href="" className='text-white'>ຫນ້າສຸ່ມ</p>
                <p href="" className='text-white'>ຜູ້ໂຊກດີ</p>
                <p href="" className='text-white'>ກ່ຽວກັບ</p>
              </CDBBox>
            </CDBBox>

            <CDBBox>
              <p className="h5 mb-4 " style={{ fontWeight: '600' }}>
                ທີ່ຕັ້ງບໍລິສັດ
              </p>

              <CDBBox className='' flex="column" display="flex" style={{ cursor: 'pointer', padding: '0' }}>
                <p href="" className='text-white'>Syshai Village</p>
                <p href="" className='text-white'>Sykhodtabong District</p>
                <p href="" className='text-white'>Vientiane Capital</p>

              </CDBBox>
            </CDBBox>
          </CDBBox>

          <hr />
          <small className="text-center mt-3">&copy; SBS, {new Date().getFullYear()}. All rights reserved.</small>
        </CDBBox>
      </CDBFooter>
    </div>
  )
}

export default Footer
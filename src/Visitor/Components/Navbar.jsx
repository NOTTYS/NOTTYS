import React from 'react'
import '../Assets/sass/navbar.scss'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/icon/SBSLOGO2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function Navbarr() {
  return (
    <div>
          <div className='bg-primary align-items-center'>
            <div className='text-center text-white top'>
              SBS Trade is the best choice for your life
            </div>
            <Navbar className='position-relative py-3' expand="lg">
        <Navbar.Brand className='logoTop'><Link to='/'><img style={{top: 0}} className='position-absolute mb-5' height={90} src={logo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="" />
        <Navbar.Collapse className='justify-content-between' id="">
          <Nav>
          {/* <Nav.Link className='logo'><Link to='/'><img height={150} src="https://scontent.fvte2-3.fna.fbcdn.net/v/t39.30808-6/267449183_104901058719162_4702259589893712784_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=g9tRCr14V0YAX8fEvPB&_nc_ht=scontent.fvte2-3.fna&oh=00_AT_sEjG0NQqK3YCGk0Exw4qUU--M07aFHsTqx8GaWJ5aiw&oe=62F0D63C" alt="" /></Link></Nav.Link> */}
          </Nav>
          {/* <Nav
            className="me-auto my-2 my-lg-0 justify-items-center"

          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav> */}
          <Nav
          className='Nav'
            style={{ height: "auto"}}
          >
            <Nav.Link><Link className='item' to='/'>ຫນ້າຫລັກ</Link></Nav.Link>
            <Nav.Link><Link className='item' to='/Random'>ຫນ້າສຸ່ມ</Link></Nav.Link>
            <Nav.Link><Link to='/LuckyList' className='item'>ຜູ້ໂຊກດີ</Link></Nav.Link>
            <Nav.Link><Link to='/About' className='item' >ກ່ຽວກັບ</Link></Nav.Link>
            {/* <NavDropdown className='itemNavDropdown' title="ພາສາ" id="NavDropdown">
              <NavDropdown.Item className='item-dropdown' href="#action3">ລາວ</NavDropdown.Item>
              <NavDropdown.Item className='item-dropdown' href="#action3">ອັງກິດ</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <Nav>
          <FontAwesomeIcon className='mt-2 pe-3 faMoon zoom' icon={faMoon} fontSize={30}/>
          <Nav.Link className='itemLogin'><Link to='/employee'>ຫນ້າ Login ຂອງພະນັກງານ</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
          </div>
       
            {/* <div className='containers'>
                <div className='navbarLeft'>
                    <nav>
                        <ul>
                            <li className='logo zoom'><img width={150} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Svra3ryXkD2AsmVZRwnUCiY_fVYlleuaww&usqp=CAU" alt="" /></li>

                        </ul>
                    </nav>
                </div>
                <div className='navbarRight'>
                    <nav>
                        <ul>
                        <li className='zoom'><a href="">Home</a></li>
                            <li className='zoom'><a href="">Product</a></li>
                            <li className='zoom'><a href="">Activity</a></li>
                            <li className='zoom'><a href="">News</a></li>
                            <li className='zoom'><a href="">Contact</a></li>
                            <li className='zoom'><a href="">language</a></li>
                            <li className='zoom'><a href="">Mode</a></li>
                        </ul>
                    </nav>
                </div>
            </div> */}
    </div>
  )
}

export default Navbarr
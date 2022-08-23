import React from 'react'
import LuckyGuys from '../JSON/LuckyGuys.json'
import Card from 'react-bootstrap/Card'
import Select from 'react-select';
import { useState } from 'react'
import '../Assets/sass/LuckyPeople.scss'
import ReactPaginate from 'react-paginate';

function LuckyPeople() {
    const [select, setSelect] = useState()

    const [data, setData] = useState(LuckyGuys.slice(0,20))
  
    function getInput(event) {
      setSelect(event.label)
      filterData(event.label)
    }
  
    function reset() {
      setSelect(null)
      setData(LuckyGuys)
    }
  
    const filterData = (value) => {
      if(!value) {
        setData(LuckyGuys)
      }
      else if (value){
        const filteredData = []
        setData(filteredData)
      }
      else if (value != LuckyGuys.value) {
        const filteredData = ["No data"]
        setData(filteredData)
      }
    }

    const [pageNumber, setPageNumber] = useState(0)
    
    const itemsPerPage = 12
    const pageVisited = pageNumber * itemsPerPage
    const displayUsers =  data.slice(pageVisited, pageVisited + itemsPerPage).map(e => {
      return (
      <Card key={e.id} className='mx-3 mb-4 cardbox' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-center fw-bold'>{`ຊື່ ${e.firstname} ${e.lastname}`}</Card.Title>
        <hr />
        <Card.Title className='text-center mb-3'>{`ງວດທີ ${e.value}`}</Card.Title>
        <Card.Title className='text-center text-white prize'>{`${e.prize}`}</Card.Title>
      </Card.Body>
    </Card>
    )
    })

    const pageCount = Math.ceil(data.length / itemsPerPage)

    const changePage = ({selected}) => {
      setPageNumber(selected)
    }
  return (
    <div>
      <div className='formCard'>
        <div style={{height: "auto"}} className='container mt-3'>
            <p className='fs-1 fw-bold mt-5 mb-4 text-center'>ລາຍຊື່ຜູ້ໂຊກດີ</p>
          <div className='d-flex justify-content-center align-items-center p-3'>
          <label htmlFor="" className='justify-item-center me-3 fs-4'>ຄົ້ນຫາ:</label>
          {/* <select onChange={getInput}  value={select} className='w-25' name="" id="">
            <option selected="">ທັງຫມົດ</option>
            {array.map((e, key) => 
            (
              <option key={key} value="1">ງາດທີ {e.id}</option>
            )<
            )}
          </select> */}
          <Select id='select' placeholder={select}  className='w-50 search-box'
          value={select}
          onChange={getInput}
            options= {LuckyGuys}
          />
          <button onClick={reset} className='ms-3 button'>Reset</button>
          </div>
            <div className='row justify-items-center justify-content-center my-4'>
              {
                displayUsers
              }
            </div>
            {console.log(select)}
            <div className='row justify-content-center justify-items-center '>
            {data.length == null ?  
                displayUsers
              : LuckyGuys.filter(e => e.value === select).map((e, i) => 
              <Card key={e.id} className='mx-3 mb-4 cardbox' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='text-center fw-bold'>{`ຊື່ ${e.firstname} ${e.lastname}`}</Card.Title>
        <hr />
        <Card.Title className='text-center mb-3'>{`ງວດທີ ${e.value}`}</Card.Title>
        <Card.Title className='text-center text-white prize'>{`${e.prize}`}</Card.Title>
      </Card.Body>
    </Card>
               )}
               
              </div>
             
          </div>
         
              </div>
              <div className='mb-5 p-1 position-static'>
              <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              >
              </ReactPaginate>
              </div>
    </div>
  )
}

export default LuckyPeople
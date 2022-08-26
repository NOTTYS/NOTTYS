import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import PageNotFound from './PageNotFound'
import LuckyListName from '../Pages/LuckyListName'
import About from '../Pages/About'
import DetailEvent from '../Pages/DetailEvent'
import RandomPage from '../Pages/RandomPage'


function route() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/LuckyList' element={<LuckyListName/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/DetailEvent' element={<DetailEvent/>}/>
    <Route path='/Random' element={<RandomPage/>}/>
    <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </div>
  )
}

export default route